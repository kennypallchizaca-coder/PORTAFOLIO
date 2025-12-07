/**
 * Logo ALX con anillo orbital usando el logo.webp original
 */
import { memo } from 'react'
import logoWebp from '../img/logo.webp'

interface LogoProps {
  className?: string
  size?: number
}

const Logo = ({ className = '', size = 40 }: LogoProps) => (
  <img
    src={logoWebp}
    alt="LEXISWARE Logo"
    style={{ height: size }}
    className={className}
    loading="lazy"
    decoding="async"
  />
)

export default memo(Logo)
