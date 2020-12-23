// Dependencies.
import styled from 'styled-components'
import {H5} from './H5'

// Div.
const Div = styled.div`
  & + & {
    margin-top: 20px;
  }

  .title {
    margin-bottom: 7.5px;
  }
`

// Props.
interface Props {
  className?: string
  title: string
}

// Form Field.
export const FormField: React.FC<Props> = ({children, className, title}) => {

  // ..
  return <Div className={`${className || ''} formField`}>

    {/* Title. */}
    <H5 className="title">{title}</H5>

    {/*  */}
    {children}

  </Div>

}