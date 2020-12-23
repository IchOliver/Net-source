// Dependencies.
import styled from 'styled-components'
import {Page} from '../components/Page'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {auth} from '../utils/firebase'
import {LOCALSTORAGE} from '../utils/localStorage'

// Email Page.
const EmailPage = () => {

  // Router.
  const router = useRouter()
  const {query} = router

  // Did Mount.
  useEffect(() => {
    const email = LOCALSTORAGE.getItem('email')
    auth.signInWithEmailLink(email, window.location.href)
  }, [])

  // ..
  return <Page/>

}

// Export.
export default EmailPage