import {Outlet} from "react-router-dom";
import Header from "../Header/Header.jsx";


const Layout = () => (
    <>
        <Header/>
        <main className="content">
            <Outlet/>
        </main>
    </>
)

export default Layout