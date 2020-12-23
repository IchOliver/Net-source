// Dependencies.
import MODAL from 'react-modal'
import styled from 'styled-components'
import { H2 } from '../H2'
import { P } from '../P'
import { NavigationBar } from '.'
import { useContext } from 'react'
import { GlobalContext, UserContext } from '../../context'
import { Hyperlink } from '../Hyperlink'
import { colors, language } from '../../utils'

// Div.
const Div = styled.div`
  padding-bottom: 10px;

  & > ${H2} {
    margin-bottom: 10px;
  }

  & > ${P} {
    margin-bottom: 30px;
    padding-right: 20px;
  }

  .formField {
    margin-bottom: 20px;
  }

  & > .links {
    padding: 20px;
    padding-top: 40px;
    text-align: center;

    .link h2 {
      margin-bottom: 40px;
    }

    .link.active {
      color: ${colors.vibrantBlue};
      text-decoration: underline;
    }
  }
`

// Props.
interface Props {}

export const MobileNavigationMenu: React.FC<Props> = props => {

  // Global Context.
  const {
    showMobileNavigationMenu, 
    setShowMobileNavigationMenu
  } = useContext(GlobalContext)

  // 
  const {currentUser} = useContext(UserContext)

  if (!showMobileNavigationMenu) return null
  
  // ..
  return <MODAL
    appElement={typeof document !== 'undefined' && document.getElementById('__next') || ''}
    portalClassName="mobileNavigationMenu"
    isOpen={showMobileNavigationMenu}
    onRequestClose={() => setShowMobileNavigationMenu(false)}
    shouldCloseOnEsc
    style={{
      content: {
        border: 'none', borderRadius: 'none', bottom: 0, boxShadow: 'none', 
        left: 0, right: 0, top: 0, margin: 'auto', maxWidth: '100%', padding: 0, width: '100%'
      },
      overlay: {zIndex: 100}
    }}
    {...props}
  >
    <Div>
      
      {/* Navigation Bar. */}
      <NavigationBar/>

      {/* Links. */}
      <div className="links">

        <a 
          className="hyperlink link" 
          href="https://medium.com/source-internet"
          rel="noopener noreferrer"
          target="_blank"
        >
          <H2>
            Blog
          </H2>
        </a>

        {/* Plans. */}
        <Hyperlink className="link" href="/plans">
          <H2>
            {language.nbn} Plans
          </H2>
        </Hyperlink>

        {/* Contact. */}
        <Hyperlink className="link" href="/contact">
          <H2>
            Contact
          </H2>
        </Hyperlink>

        {/* Dashboard. */}
        {!currentUser ? <Hyperlink className="link" href="/sign-in">
          <H2>
            Log In
          </H2>
        </Hyperlink> : <Hyperlink className="link" href="/dashboard">
          <H2>
            Dashboard
          </H2>
        </Hyperlink>}

      </div>

    </Div>
  </MODAL>
  
}