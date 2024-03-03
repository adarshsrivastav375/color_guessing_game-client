
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
// eslint-disable-next-line react/prop-types
function Layout() {

    return (
        <div>
            <Header />
            <Outlet />

        </div>
    )
}

export default Layout