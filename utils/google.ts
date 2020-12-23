// Dependencies.
import {useEffect} from 'react'

// Use Google Analytics.
export const useGoogleAnalytics = () => {
  useEffect(() => {
    const WINDOW = window as any
    WINDOW.dataLayer = WINDOW.dataLayer || []
    function gtag (key: string, arg: any) {WINDOW.dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'UA-167177328-1')
  }, [])
}