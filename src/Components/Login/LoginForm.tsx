import { useState } from "react";

const LoginForm = ({ setUserLoggedIn, userLoggedIn }) => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const [newUserData, setNewUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
    const [newUser, setNewUser] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleRegisterChange = (e) => {
        const { name, value } = e.target
        setNewUserData({
            ...newUserData,
            [name]: value,
        })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        setUserLoggedIn(!userLoggedIn)
        console.log('Form data submitted:', data);
    };

    const handleLoginLinks = () => {
        setNewUser(!newUser)
    }


    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        setUserLoggedIn(!userLoggedIn)
        console.log('user registration form submitted!', newUserData)
    }

    // function submit(formData: { get: (arg0: string) => string; }, e) {
    //     e.preventDefault()
    //     const username = formData.get("query")
    //     const password = formData.get("password")
    //     alert(`Username: ${username}, Password: ${password}`)
    // }

    return (
        <>
            {
                !newUser ?
                    <form className="form form-login flex flex-col mb:grid mb:grid-cols-2 mb:grid-rows-2 gap-20 mb:items-start mb:justify-items-start"
                        onSubmit={handleLoginSubmit}>
                        <input type="text" name="username"
                            placeholder="Enter the username"
                            value={data.username}
                            onChange={handleChange}
                            required
                            className="w-full p-10 text-lg rounded-2 mt-auto"
                        />
                        <input type="password" name="password"
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            className="w-full p-10 text-lg rounded-2 mt-auto"
                        />
                        <div className="login-btn-container flex flex-col items-start justify-start gap-15">
                            <button
                                type="submit"
                                className="bg-white py-5 px-10 border-none rounded-2 duration-150 ease-in-out hover:bg-brandGreen hover:text-white"
                            >Login</button>
                            <div className="flex justify-start items-stretch text-white gap-5">
                                <p>Don't have an account?</p>
                                <p>
                                    <span role="button" className="underline font-medium cursor-pointer hover:text-brandGreen" onClick={handleLoginLinks}>
                                        Register
                                    </span>
                                </p>
                            </div>
                        </div>
                    </form>
                    :
                    <form className="form form-register flex flex-col mb:grid mb:grid-cols-2 mb:grid-rows-2 gap-20 mb:items-start mb:justify-items-start"
                        onSubmit={handleRegisterSubmit}>
                        <input type="text" name="firstName"
                            placeholder="Enter your First Name"
                            value={newUserData.firstName}
                            onChange={handleRegisterChange}
                            required
                            className="w-full p-10 text-lg rounded-2 mt-auto"
                        />
                        <input type="text" name="lastName"
                            placeholder="Enter your Last Name"
                            value={newUserData.lastName}
                            onChange={handleRegisterChange}
                            required
                            className="w-full p-10 text-lg rounded-2 mt-auto"
                        />
                        <input type="email" name="email"
                            placeholder="Enter your email"
                            value={newUserData.email}
                            onChange={handleRegisterChange}
                            required
                            className="w-full p-10 text-lg rounded-2 mt-auto"
                        />
                        <input type="password" name="password"
                            placeholder="Enter your password"
                            value={newUserData.password}
                            onChange={handleRegisterChange}
                            required
                            className="w-full p-10 text-lg rounded-2 mt-auto"
                        />
                        <div className="register-btn-container flex flex-col items-start justify-start gap-15">
                            <button
                                type="submit"
                                className="bg-white py-5 px-10 border-none rounded-2 duration-150 ease-in-out hover:bg-brandGreen hover:text-white"
                            >Register</button>

                            <div className="flex justify-start items-stretch text-white gap-5">
                                <p>Already have an account?</p>
                                <p>
                                    <span role="button" className="underline font-medium cursor-pointer hover:text-brandGreen" onClick={handleLoginLinks}>
                                        Login
                                    </span>
                                </p>
                            </div>
                        </div>
                    </form>
            }


        </>

    )
}

export default LoginForm;