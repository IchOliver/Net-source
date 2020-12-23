// Dependencies.
import styled, { css } from 'styled-components'
import { forScreensGreaterThanMobileWidth } from '../../utils'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context'
import { MobileNavigationMenu } from './MobileNavigationMenu'
import { useRouter, Router } from 'next/router'

// Div.
const Div = styled.div`

  .menuButton {
    cursor: pointer;
    position: relative;
    height: 25px;
  }
  
  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    display: none;
  `)}
`

// Props.
interface Props {}

// Mobile Navigation Menu.
export const MobileNavigationMenuCTA: React.FC<Props> = props => {

  // Router.
  const router = useRouter()

  // Global Context.
  const {
    showMobileNavigationMenu, 
    setShowMobileNavigationMenu
  } = useContext(GlobalContext)
  
  // Did Mount.
  useEffect(() => {
    const handleRouteChange =  () => setShowMobileNavigationMenu(false)
    router.events.on('routeChangeStart', handleRouteChange)
    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [])

  // ..
  return <Div>

    {/* Menu Button. */}
    <img 
      className="menuButton" 
      onClick={() => setShowMobileNavigationMenu(show => !show)}
      src={showMobileNavigationMenu ? '/images/cross.svg' : '/images/hamburger.svg'}
    />

  </Div>

}