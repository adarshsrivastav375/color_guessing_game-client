import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { CiWallet } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Header() {
    const userState = useSelector(state => state.user);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("");

    const activeStatus = userState.status;
    useEffect(() => {
        setUser(userState);
        setLoading(false);
    }, [userState]);
    console.log(user)

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {
                            activeStatus ? <div className="flex flex-row">
                                <Link
                                    to="/profile"
                                    className="text-orange-700 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    {user.userData.name}
                                </Link>
                                <div className="flex flex-row">
                                    <span className="text-orange-700 text-3xl">
                                        <CiWallet />
                                    </span>
                                    <span className="pt-1">: ₹ {userState.userData.walletBalance}</span>
                                </div>
                            </div>
                                :
                                <Link
                                    to="login"
                                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Log in
                                </Link>
                        }


                    </div>
                    <div
                        className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                    className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={activeStatus ? "contest" : "login"}
                                    className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contest
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={activeStatus ? "profile" : "/login"}
                                    className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Profile
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}