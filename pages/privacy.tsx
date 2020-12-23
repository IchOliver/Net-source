// Dependencies.
import { Page } from '../components/Page'
import { useEffect } from 'react'

// Privacy Page.
export default () => {

  // Did Mount.
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.location.href = `${window.location.origin}/privacy.pdf` 
  }, [])

  // ..
  return <Page/>
}