// Dependencies.
import {useEffect, useContext} from 'react'
import {UserContext} from '../context'
import {useRouter} from 'next/router'

// Use Redirect If Authenticated.
export const useRedirectIfAuthenticated = (pathname: string) => {

  // ..
  const router = useRouter()
  const {currentUser} = useContext(UserContext)

  // On Change — Current User.
  useEffect(() => {
    if (currentUser) router.replace(pathname || '/')
  }, [currentUser])

}

// Use Redirect If Unauthenticated.
export const useRedirectIfUnauthenticated = (pathname: string) => {

  // ..
  const router = useRouter()
  const {currentUser} = useContext(UserContext)

  // On Change — Current User.
  useEffect(() => {
    if (currentUser === null) router.replace(pathname || '/')
  }, [currentUser])

}