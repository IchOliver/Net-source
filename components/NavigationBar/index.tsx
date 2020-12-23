// Dependencies.
import styled, {css} from 'styled-components'
import {Hyperlink} from '../Hyperlink'
import {dimensions, language, forScreensGreaterThanMobileWidth, forMobileScreens, colors} from '../../utils'
import {useContext} from 'react'
import {usePageOffset} from '../../hooks/pageOffset'
import {BrowsePlansCTA} from './SignUpCTA'
import {UserContext} from '../../context'
import { MobileNavigationMenuCTA } from './MobileNavigationMenuCTA'
import { A } from '../A'

// Div.
const Div = styled.div`
  background: transparent;
  border-bottom: 1px solid ${colors.black};
  left: 0;
  padding: 10px 0;
  top: 0;
  width: 100%;
  z-index: 69;

  .desktopLinks {
    display: none;
  }

  .content * {
    pointer-events: auto;
  }

  &.isOffset {
    /* background: #FFF; */
    /* border-color: rgba(0, 0, 0, .15); */
    transition: all 75ms ease-out;
  }
  
  .content {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: ${dimensions.navigationBarHeight}px;
    justify-content: space-between;
    margin: auto;
    max-width: 100%;
    padding: 0 20px;
    width: ${dimensions.naturalContentWidth};
  }

  .logo {
    font-size: 16px;
    font-weight: 500;
    height: 50px;
    margin-right: auto;
    width: 126px;
  }

  .hyperlink + .hyperlink {
    margin-left: 10px;
  }

  .links {
    
  }

  /* For Mobile Screens. */
  /* ${forMobileScreens(css`

  `)} */

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    .desktopLinks {
      display: block;
    }
  `)}
`

// Props.
interface Props {
  hideMobileNavigation?: boolean
}

// Navigation Bar.
export const NavigationBar: React.FC<Props> = ({hideMobileNavigation}) => {

  // Current User.
  const {currentUser} = useContext(UserContext)

  // Page Is Offset.
  const {scrollY} = usePageOffset()
  const pageIsOffset = scrollY > 0

  // ..
  return <Div className={`navigationBar ${pageIsOffset && 'isOffset' || ''}`}>

    <div className="content">
    
      {/* Logo. */}
      <Hyperlink href="/" style={{marginRight: 'auto', textDecoration: 'none'}}>
        <img className="logo" src="/images/logo.svg"/>
      </Hyperlink>

      {/* Links. */}
      <div className="links">

        {/* Mobile Navigation Menu CTA. */}
        {!hideMobileNavigation && <MobileNavigationMenuCTA/>}

        {/* Desktop Links. */}
        <div className="desktopLinks">

          <A
            className="hyperlink link" 
            href="https://medium.com/source-internet"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blog
          </A>

          <Hyperlink className="link" href="/plans">
            {language.nbn} Plans
          </Hyperlink>

          <Hyperlink className="link" href="/contact">
            Contact
          </Hyperlink>

          {/* Log In. */}
          {currentUser === null && <Hyperlink className="link" href="/sign-in">
            Sign In
          </Hyperlink>}

          {/* Sign Up. */}
          <BrowsePlansCTA invert={!pageIsOffset}/>

        </div>

      </div>

    </div>
    
  </Div>
  
}