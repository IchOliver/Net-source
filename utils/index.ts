// Dependencies.
import {css, FlattenSimpleInterpolation, keyframes} from 'styled-components'
import { AddressDetail } from '../types'

// Background Clip Available.
export const backgroundClipAvailable = () => {

  if (typeof window === 'undefined') return false

  const div = document.createElement('div')

  if ('backgroundClip' in div.style) return true
  
  // const webkitId = 'Webkit Moz O ms Khtml'.replace(/([A-Za-z]*)/g, function (val) { 
  //   if (val + 'BackgroundClip' in div.style) return true;
  // })

  const ua = navigator.userAgent.toLowerCase()
  const isAndroid = ua.indexOf('android') > - 1
  if (isAndroid) return false

  return false

}

// Capitalise.
export const capitalise = (x: string) => {
  if (typeof x !== 'string') return ''
  const y = x.toLowerCase()
  return y.charAt(0).toUpperCase() + y.slice(1)
}

// Colors.
export const colors = {
  black: '#000000',
  blue: '#0052CC',
  cream: '#fef2da',
  green: '#98f9c5',
  red: 'red',
  vibrantBlue: '#1201ff',
  washedGrey: '#f2f2f2',
  white: '#FFFFFF'
}

// Config.
export const config = {
  name: 'CommUnity'
}

// Dimensions.
export const dimensions = {
  navigationBarHeight: 80,
  naturalContentWidth: '1300px'
}

// Fade In.
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

// Fade From Bottom.
export const fadeFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

// Fade From Right.
export const fadeFromRight = keyframes`

  /* From. */
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  /* To. */
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const formattedAddressFrom = (addressDetail: AddressDetail) => {
  const {address1, address2} = addressDetail
  return `${(address1 || '').trim()} ${(address2 || '').trim()}`
}

// For Screens Greater Than Medium Width.
export const forScreensGreaterThanMobileWidth = (styles: FlattenSimpleInterpolation) => css`
  @media screen and (min-width: ${screens.mobile}) {
    ${styles}
  }
`

// For Mobile Screens.
export const forMobileScreens = (styles: FlattenSimpleInterpolation) => css`
  @media screen and (max-width: ${screens.mobile}) {
    ${styles}
  }
`

// Language.
export const language = {
  nbn: 'nbn™'
}

// Screens.
export const screens = {
  mobile: '800px'
}