import { Outlet } from "react-router"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const RootLayout = () => {
    return (
        <>
            <div className="site-wrapper">
                <Header />
                <main className="main bg-brandGray">
                    <div className=" max-w-desktopMaxWidth mx-auto my-0 px-20 py-0">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default RootLayout