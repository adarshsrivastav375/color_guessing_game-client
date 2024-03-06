import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { httpAuth } from "..";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";



function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData);
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setUser(userData);
        setLoading(false);
    }, [userData]);
    if (loading) {
        return <div>Loading...</div>;
    }
    const logoutHandler = async () => {
        try {
            const response = await httpAuth.post("/api/v1/users/logout");
            console.log(response)
            localStorage.clear();
            dispatch(logout())
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);

        }
    };




    return (

        <div className="flex flex-col sm:flex-row gap-4 px-4 m-1">
            <div className="w-full sm:w-1/4 bg-gray-100 shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <img
                        src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                        alt="User Avatar"
                        className="w-32 h-32 bg-gray-300 rounded-full mb-4"
                    />
                    <h1 className="text-xl font-bold">{user.name}</h1>
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                        <NavLink
                            to="/profile/recharge"
                            className="bg-gray-400 hover:bg-red-600 text-white py-2 px-4 rounded"
                            activeClassName="bg-orange-700"
                        >
                            Recharge
                        </NavLink>
                        <NavLink
                            to="/profile/withdraw"
                            className="bg-gray-400 hover:bg-red-600 text-white py-2 px-4 rounded"
                            activeClassName="bg-orange-700"
                        >
                            Withdraw
                        </NavLink>
                    </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col items-center">
                    <ul className="text-xl">
                        <NavLink
                            to="/profile/update-bank-details"
                            className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                            activeClassName="text-orange-700"
                        >
                            <li className="mb-2">Update Bank details</li>
                        </NavLink>
                        <NavLink
                            to="/profile/change-password"
                            className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                            activeClassName="text-orange-700"
                        >
                            <li className="mb-2">Update Password</li>
                        </NavLink>
                        <div
                            onClick={logoutHandler}
                            className="text-white bg-orange-700 text-center cursor-pointer hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium text-sm px-4 lg:px-5 py-2 mr-2 focus:outline-none"
                        >
                            <h1>logout</h1>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="w-full sm:w-3/4 flex justify-center items-center">
                {/* Outlet content */}
                <Outlet />
            </div>
        </div>



    )
}

export default Profile