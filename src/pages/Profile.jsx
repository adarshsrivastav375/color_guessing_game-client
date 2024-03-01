import { Outlet, NavLink } from "react-router-dom"
function Profile() {
    return (

        <div className=" flex flex-row px-5 ">

            <div className="border-2 border-red-300">
                <ul className="flex flex-col justify-between gap-5 items-center mt-2 font-medium lg:flex lg:flex-col lg:justify-between lg:items-center">
                    <NavLink to="/contest/emred"
                        className={({ isActive }) =>
                            ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        <li className=" text-xl text-orange-700" >Profile</li>
                    </NavLink>

                    <NavLink to="#" end
                        className={({ isActive }) =>
                            ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        <li className=" text-xl ">bank details</li>
                    </NavLink>



                    <NavLink to="#"
                        className={({ isActive }) =>
                            ` ${isActive ? "text-orange-700 border-2 border-red-600 w-[20vb] text-center px-2 py-1" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        <li className=" text-xl  ">Recharge</li>
                    </NavLink>


                    <NavLink to="#"
                        className={({ isActive }) =>
                            ` ${isActive ? "text-orange-700 border-2 border-red-600 w-[20vb] text-center px-2 py-1" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        <li className=" text-xl">withdraw</li>
                    </NavLink>


                    <NavLink to="/contest/emred"
                        className={({ isActive }) =>
                            ` ${isActive ? "text-orange-700 border-2 border-red-600 w-[20vb] text-center px-2 py-1" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        <li className=" text-xl ">bank details</li>
                    </NavLink>
                    <NavLink to="/contest/emred"
                        className={({ isActive }) =>
                            ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        <li className=" text-xl ">Address</li>
                    </NavLink>
                    <NavLink to="/contest/emred"
                        className={({ isActive }) =>
                            ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        <li className=" text-xl ">About</li>
                    </NavLink>
                    <NavLink to="/contest/emred"
                        className={({ isActive }) =>
                            ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        <li className=" text-xl ">change password</li>
                    </NavLink>


                </ul>
            </div>
            <div >



            </div>
            <Outlet />
        </div>


    )
}

export default Profile