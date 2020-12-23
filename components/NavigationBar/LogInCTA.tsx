// Dependencies.
import {useContext} from 'react'
import {UserContext} from '../../context'
import styled from 'styled-components'
import {Button as BUTTON} from '../Button'
import {Hyperlink} from '../Hyperlink'
import {CTA} from '../CTA'

// Button.
const Button = styled(CTA)`
  padding: 4px 12px;
`

// Props. 
interface Props {
  invert: boolean
}

// Log In CTA.
export const LogInCTA: React.FC<Props> = ({invert}) => {

  const {currentUser} = useContext(UserContext)

  const href = currentUser === undefined && '' || currentUser === null && '/login' || '/dashboard'
  const message = currentUser === undefined && '..' || currentUser === null && 'Log In' || 'Dashboard'

  // ..
  return <Hyperlink href={href}>
    <Button className={invert && 'invert' || ''}>{message}</Button>
  </Hyperlink>

}