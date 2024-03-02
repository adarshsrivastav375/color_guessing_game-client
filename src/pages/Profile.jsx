import { Outlet, NavLink } from "react-router-dom";


function Profile() {
    return (

        <div className="bg-white">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-grey-100 shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                </img>
                                <h1 className="text-xl font-bold">John Doe</h1>
                                <p className="text-gray-700"></p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <NavLink to="/profile/recharge" className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} bg-gray-800 hover:bg-red-600 text-white py-2 px-4 rounded`
                                    }>
                                        Recharge
                                    </NavLink>
                                    <NavLink to="/profile/withdraw" className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} bg-gray-800 hover:bg-red-600 text-white py-2 px-4 rounded`
                                    }>
                                        Withdraw
                                    </NavLink>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex flex-col items-center">
                                <ul className="text-xl">
                                    <NavLink className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        <li className="mb-2">About Game</li>
                                    </NavLink>
                                    <NavLink className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        <li className="mb-2"> Add Bank Details</li>
                                    </NavLink>
                                    <NavLink className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        <li className="mb-2">Add Card Details</li>
                                    </NavLink>
                                    <NavLink className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        <li className="mb-2">JavaScript</li>
                                    </NavLink>
                                    <NavLink className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                        <li className="mb-2">JavaScript</li>
                                    </NavLink>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>


    )
}

export default Profile