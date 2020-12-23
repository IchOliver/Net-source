// Dependencies.
import { Page } from '../components/Page'
import { useEffect } from 'react'

// Terms Page.
export default () => {

  // Did Mount.
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.location.href = `${window.location.origin}/terms.pdf` 
  }, [])

  // ..
  return <Page/>
}