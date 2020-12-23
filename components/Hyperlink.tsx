// Dependencies.
import styled from 'styled-components'
import Link, {LinkProps} from 'next/link'
import { useRouter } from 'next/router'
import { A } from './A'

// Props.
interface Props extends LinkProps  {
  activeClassName?: string
  className?: string
  style?: React.CSSProperties
  target?: string
}

// Hyperlink.
export const Hyperlink: React.FC<Props> = ({activeClassName, children, className, style, target, ...props}) => {

  const router = useRouter()
  const active = router.pathname === props.href

  // ..
  return <Link {...props} passHref>

    <A 
      className={`hyperlink ${(active && (activeClassName || 'active')) || ''} ${className || ''}`} 
      style={style} target={target}
    >
      {children}
    </A>
    
  </Link>

}