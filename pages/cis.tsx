// Dependencies.
import { Page } from '../components/Page'
import { useEffect } from 'react'

// Critical Information Summary Page.
export default () => {

  // Did Mount.
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.location.href = `${window.location.origin}/cis.pdf` 
  }, [])

  // ..
  return <Page/>
}