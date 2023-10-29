import Link from 'next/link'

interface NavItemProps {
  text: string
  href: string
  active: boolean
}

const NavItem: React.FC<NavItemProps> = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <p className={`nav__item ${active ? 'active' : ''}`}>{text}</p>
    </Link>
  )
}

export default NavItem
