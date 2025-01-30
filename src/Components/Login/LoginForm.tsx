import { useState } from "react";

const LoginForm = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', data);
    };

    // function submit(formData: { get: (arg0: string) => string; }, e) {
    //     e.preventDefault()
    //     const username = formData.get("query")
    //     const password = formData.get("password")
    //     alert(`Username: ${username}, Password: ${password}`)
    // }

    return (
        <form className="form form-login flex flex-col mb:grid mb:grid-cols-2 mb:grid-rows-2 gap-20 mb:items-start mb:justify-items-start"
            onSubmit={handleSubmit}>
            <input type="text" name="username"
                placeholder="Enter the username"
                value={data.username}
                onChange={handleChange}
                className="w-full p-10 text-lg rounded-2"
            />
            <input type="text" name="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={handleChange}
                className="w-full p-10 text-lg rounded-2"
            />
            <button
                type="submit"
                className="bg-white py-5 px-10 border-none rounded-2 duration-150 ease-in-out hover:bg-brandGreen hover:text-white"
            >Submit</button>
        </form>
    )
}

export default LoginForm;