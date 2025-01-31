import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import LoginForm from "../Components/Login/LoginForm"
import Dashboard from "./Dashboard"

const Home = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     const checkLogInStatus = () => {
    //         if (userLoggedIn) {
    //             navigate('dashboard')
    //         }
    //     }
    //     checkLogInStatus()
    // })

    // if (userLoggedIn) {
    //     navigate('')
    // }

    return (
        <div className="home-page">
            {
                !userLoggedIn ?
                    <LoginForm setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn} />
                    :
                    <Dashboard />
            }
        </div>
    )
}

export default Home