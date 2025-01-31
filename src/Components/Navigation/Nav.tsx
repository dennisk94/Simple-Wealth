import NavItem from "./NavItem"

const Nav: React.FC<{ menu: boolean }> = ({ menu }) => {
    return (
        <nav
            className={menu ? 'nav menu-opened' : 'nav'}
        >
            <ul>
                <NavItem name='Home' slug='' />
                <NavItem name='Dashboard' slug='dashboard' />
                <NavItem name='Profile' slug='profile' />
            </ul>
        </nav>
    )
}

export default Nav