import logo from "../assets/logo.png"
import { Link, redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";





const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [refreferralBy, setReferralBy] = useState("")
    const [password, setPassword] = useState("")

    const data = {
        name,
        email,
        mobile,
        refreferralBy,
        password
    }
    const signHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:6009/api/v1/users/signup', data)
            alert(response.data.message);

            if (response.data.data.success) {
                console.log(response.data.data.id)
                redirect("/")
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-12 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                type="text"
                                value={name}
                                autoComplete="name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                            Mobile Number
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setMobile(e.target.value)}
                                value={mobile}
                                name="mobile"
                                type="number"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="referralBy" className="block text-sm font-medium leading-6 text-gray-900">
                            Referral Code
                        </label>
                        <div className="mt-2">
                            <input
                                value={refreferralBy}
                                onChange={(e) => setReferralBy(e.target.value)}
                                name="referralBy"
                                type="number"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={refreferralBy}
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={signHandler}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already registered?{' '}
                    <Link to="/login" className="font-semibold leading-6 text-orange-700 hover:text-orange-600">
                        Login here
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Signup