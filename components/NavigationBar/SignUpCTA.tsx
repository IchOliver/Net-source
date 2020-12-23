// Dependencies.
import {useContext} from 'react'
import {UserContext} from '../../context'
import styled from 'styled-components'
import {Button as BUTTON} from '../Button'
import {Hyperlink} from '../Hyperlink'
import {CTA} from '../CTA'

// Button.
const Button = styled(CTA)`
  padding: 8px 12px;
`

// Props.
interface Props {
  invert: boolean
}

// Sign Up CTA.
export const BrowsePlansCTA: React.FC<Props> = ({invert}) => {

  const {currentUser} = useContext(UserContext)

  const href = currentUser === undefined && '' || currentUser === null && '/plans/build' || '/dashboard'
  const message = currentUser === undefined && '..' || currentUser === null && 'Build A Plan' || 'Manage Account'

  // ..
  return <Hyperlink href={href}>
    <Button className={invert && !currentUser && 'invert' || ''}>{message}</Button>
  </Hyperlink>

}