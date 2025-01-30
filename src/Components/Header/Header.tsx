import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router"
import Nav from "../Navigation/Nav"
import { AiOutlineMenu } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import './Header.moodule.css'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const { pathname } = useLocation()
    const handleMenuClick = () => {
        setMenu(!menu)
    }

    const handleWindowClick = () => {
        setMenu(false)
    }

    useEffect(() => {
        setMenu(false)
    }, [pathname])
    return (
        <header className="flex justify-between p-4 bg-brandGray">
            <div className="header-wrapper max-w-desktopMaxWidth w-full mx-auto my-0 flex justify-between items-center p-20">
                <div className="site-branding">
                    <NavLink to={'/'}>
                        <h1 className="text-white font-medium text-xl">WealthWise</h1>
                    </NavLink>
                </div>
                <div className="nav-container flex gap-40">
                    {
                        menu ?
                            <RiMenu3Fill
                                className={menu ? 'hamburger-icon close cursor-pointer z-999999 absolute top-7 right-7 w-7 h-7 flex' : 'hamburger-icon close cursor-pointer'}
                                onClick={handleMenuClick}
                            />
                            :
                            <AiOutlineMenu
                                className={menu ? 'z-999999 absolute top-5 w-7 h-7 flex' : 'hamburger-icon open cursor-pointer'}
                                onClick={handleMenuClick}
                            />
                    }
                    <Nav menu={menu} />

                    <button className={`close-mobile-window ${menu ? 'menu-opened' : ''}`} aria-label='close navigation menu' onClick={() => handleWindowClick()}></button>
                </div>
            </div>
        </header>
    )
}

export default Header