import { NavLink } from "react-router"

const NavItem = ({ name, slug }: { name: string, slug: string }) => {
    return (
        <>
            <li>
                <NavLink to={`/${slug}`} className="no-underline text-white font-medium hover:text-brandGreen">
                    {name}
                </NavLink>
            </li>
        </>
    )
}

export default NavItem