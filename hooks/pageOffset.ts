// Dependencies.
import {useEffect, useState} from 'react'

// Get Scroll Y.
const getScrollY = () => {
  const doc = document.documentElement
  const scrollY = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
  return scrollY
}

// Use Page Offset.
export const usePageOffset = () => {
  
  // State.
  const [scrollY, setScrollY] = useState(0)

  // Did Mount.
  useEffect(() => {

    // Set Initial Scroll Y.
    setScrollY(getScrollY())

    // Scroll Listener.
    const scrollListener = () => {
      setScrollY(getScrollY()) // Update Scroll Y.
    }

    // Window — Event Listener — Scroll.
    window.addEventListener('scroll', scrollListener)

    // Tear Down.
    const tearDown = () => {
      window.removeEventListener('scroll', scrollListener)
    }

    // ..
    return tearDown

  }, [])

  // ..
  return {scrollY}

}