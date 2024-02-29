import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"


function Contest() {

    return (
        <div>
            <header className="shadow sticky z-50 ">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div>
                        <ul className="flex  justify-between items-center mt-2 font-medium lg:flex lg:flex-row lg:justify-between lg:items-center">
                            <li>
                                <NavLink to="/contest" end
                                    className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Parity
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/contest/sapre"
                                    className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Sapre
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contest/bcone"
                                    className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Bcone
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contest/emred"
                                    className={({ isActive }) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Emred
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div >



                    </div>
                </nav>
            </header>
            <Outlet />
        </div >
    )
}

export default Contest