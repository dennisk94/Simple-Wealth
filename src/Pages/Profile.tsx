import { useState } from "react";


const Profile = () => {
    const [profileData, setProfileData] = useState({
        username: 'username',
        firstName: 'userFirst',
        lastName: 'userLast',
        email: 'user@mail.com',
        password: '1234',
    })

    const handleProfileSubmit = (e) => {
        e.preventDefault()
        console.log('Form data submitted:', profileData);
    };


    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
    };


    return (
        <div className="profile-page">
            <h1 className="text-2xl text-white mb-50">Personal Information</h1>

            <form className="form form-profile flex flex-col mb:grid mb:grid-cols-2 mb:grid-rows-2 gap-40 mb:items-start mb:justify-items-start"
                onSubmit={handleProfileSubmit}>
                <div className="flex flex-col gap-10 w-full">
                    <label for="username" className="text-lg text-white">Username</label>
                    <input type="text" name="username"
                        placeholder="Enter your Username"
                        value={profileData.username}
                        onChange={handleProfileChange}
                        required
                        className="w-full p-10 text-lg rounded-2 mt-auto"
                    />
                </div>
                <div className="flex flex-col gap-10 w-full">
                    <label for="firstName" className="text-lg text-white">First Name</label>
                    <input type="text" name="firstName"
                        placeholder="Enter your First Name"
                        value={profileData.firstName}
                        onChange={handleProfileChange}
                        required
                        className="w-full p-10 text-lg rounded-2 mt-auto"
                    />
                </div>

                <div className="flex flex-col gap-10 w-full">
                    <label for="email" className="text-lg text-white">Email</label>
                    <input type="text" name="email"
                        placeholder="Enter your new email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        required
                        className="w-full p-10 text-lg rounded-2 mt-auto"
                    />
                </div>

                <div className="flex flex-col gap-10 w-full">
                    <label for="password" className="text-lg text-white">Password</label>
                    <input type="password" name="password"
                        placeholder="Enter new password"
                        value={profileData.password}
                        onChange={handleProfileChange}
                        required
                        className="w-full p-10 text-lg rounded-2 mt-auto"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-white py-5 px-10 border-none rounded-2 duration-150 ease-in-out col-start-1 hover:bg-brandGreen hover:text-white"
                >Save</button>
            </form>
        </div>
    )
}

export default Profile