// Dependencies.
import { useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'

// Canvas.
const Canvas = styled.canvas`
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

// Props.
interface Props {
  id: string
}

interface Color {
  r: number
  g: number
  b: number
}

// Plasma Canvas.
export const PlasmaCanvas = ({id}) => {

  // Did Mount.
  useLayoutEffect(() => {

    // Canvas.
    const canvas = document.getElementById(id) as HTMLCanvasElement
    if (!canvas) return
    const context = canvas.getContext('2d')

    const imageSize = 512
    const mapSize = 1024

    canvas.width = imageSize
    canvas.height = imageSize

    const createImageData = () => {
      const image = context.createImageData(imageSize, imageSize);
      for (let i = 0; i < image.data.length; i += 4) {
        image.data[i] = 0; // R
        image.data[i + 1] = 0; // G
        image.data[i + 2] = 0; // B
        image.data[i + 3] = 255; // A
      }
      return image
    }

    const image = createImageData()

    const distance = (x: number, y: number) => Math.sqrt(x * x + y * y)

    const heightMap1 = []
    for (let u = 0; u < mapSize; u++) {
      for (let v = 0; v < mapSize; v++) {
        const i = u * mapSize + v
        const cx = u - mapSize / 2
        const cy = v - mapSize / 2
        const d = distance(cx, cy)
        const stretch = (3 * Math.PI) / (mapSize / 2)
        const ripple = Math.sin(d * stretch)
        const normalized = (ripple + 1) / 2
        heightMap1[i] = Math.floor(normalized * 128)
      }
    }

    const heightMap2 = []
    for (let u = 0; u < mapSize; u++) {
      for (let v = 0; v < mapSize; v++) {
        const i = u * mapSize + v
        const cx = u - mapSize / 2
        const cy = v - mapSize / 2
        const d1 = distance(0.8 * cx, 1.3 * cy) * 0.022
        const d2 = distance(1.35 * cx, 0.45 * cy) * 0.022
        const s = Math.sin(d1)
        const c = Math.cos(d2)
        const h = s + c
        const normalized = (h + 2) / 4
        heightMap2[i] = Math.floor(normalized * 127)
      }
    }

    const interpolate = (c1: Color, c2: Color, f: number) => ({
      r: Math.floor(c1.r + (c2.r - c1.r) * f),
      g: Math.floor(c1.g + (c2.g - c1.g) * f),
      b: Math.floor(c1.b + (c2.b - c1.b) * f)
    })

    const randomColor = () => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return {r, g, b}
    }

    const linearGradient = (c1: Color, c2: Color) => {
      const g = []
      for (let i = 0; i < 256; i++) {
        const f = i / 255
        g[i] = interpolate(c1, c2, f)
      }
      return g
    }

    const makeRandomPalette = () => {
      const c1 = {r: 0, g: 81, b: 204}
      const c2 = {r: 255, g: 255, b: 255}
      const c3 = {r: 0, g: 81, b: 204}
      const c4 = {r: 0, g: 81, b: 204}
      const c5 = {r: 0, g: 81, b: 204}
      return linearGradient(c1, c2)
      return makeFiveColorGradient(c1, c2, c3, c4, c5)
    }

    const makeFiveColorGradient = (c1: Color, c2: Color, c3: Color, c4: Color, c5: Color) => {
      const g = []
      for (let i = 0; i < 64; i++) {
        const f = i / 64
        g[i] = interpolate(c1, c2, f)
      }
      for (let i = 64; i < 128; i++) {
        const f = (i - 64) / 64
        g[i] = interpolate(c2, c3, f)
      }
      for (let i = 128; i < 192; i++) {
        const f = (i - 128) / 64
        g[i] = interpolate(c3, c4, f)
      }
      for (let i = 192; i < 256; i++) {
        const f = (i - 192) / 64
        g[i] = interpolate(c4, c5, f)
      }
      return g
    }

    let dx1 = 0
    let dy1 = 0
    let dx2 = 0
    let dy2 = 0
    const moveHeightMaps = t => {
      dx1 = Math.floor((((Math.cos(t * 0.0002 + 0.4 + Math.PI) + 1) / 2) * mapSize) / 2)
      dy1 = Math.floor((((Math.cos(t * 0.0003 - 0.1) + 1) / 2) * mapSize) / 2)
      dx2 = Math.floor((((Math.cos(t * -0.0002 + 1.2) + 1) / 2) * mapSize) / 2)
      dy2 = Math.floor((((Math.cos(t * -0.0003 - 0.8 + Math.PI) + 1) / 2) * mapSize) / 2)
    }

    const palettes = [makeRandomPalette(), makeRandomPalette()]
    let palette = []

    let prevDirection = 1

    const updatePalette = (t: number) => {
      const timeScale = 0.0005
      const x = t * timeScale
      const inter = (Math.cos(x) + 1) / 2
      const direction = -Math.sin(x) >= 0 ? 1 : -1
      if (prevDirection != direction) {
        prevDirection = direction
        if (direction == -1) palettes[0] = makeRandomPalette()
        else palettes[1] = makeRandomPalette()
      }
      for (let i = 0; i < 256; i++) {
        palette[i] = interpolate(palettes[0][i], palettes[1][i], inter);
      }
    }

    const updateImageData = () => {
      for (let u = 0; u < imageSize; u++) {
        for (let v = 0; v < imageSize; v++) {
          const i = (u + dy1) * mapSize + (v + dx1)
          const k = (u + dy2) * mapSize + (v + dx2)
          const j = u * imageSize * 4 + v * 4
          let h = heightMap1[i] + heightMap2[k]
          let c = palette[h]
          image.data[j] = c.r
          image.data[j + 1] = c.g
          image.data[j + 2] = c.b
        }
      }
    }

    const tick = (time: number) => {
      moveHeightMaps(time)
      updatePalette(time)
      updateImageData()
      context.putImageData(image, 0, 0)
      requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)

  }, [])

  return <Canvas id={id}/>
}