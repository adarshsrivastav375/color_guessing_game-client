
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
// eslint-disable-next-line react/prop-types
function Layout({ currentUser }) {
    
    return (
        <div>
            <Header currentUser={currentUser} />
            <Outlet />

        </div>
    )
}

export default Layout