import NavItem from "./NavItem"

const Nav: React.FC<{ menu: boolean }> = ({ menu }) => {
    return (
        <nav
            className={menu ? 'nav menu-opened' : 'nav'}
        >
            <ul>
                <NavItem name='Home' slug='' />
                <NavItem name='About' slug='about' />
                <NavItem name='Contact' slug='contact' />
            </ul>
        </nav>
    )
}

export default Nav