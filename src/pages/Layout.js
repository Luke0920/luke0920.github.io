import { Outlet, Link} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
        <nav>
            <ul>
                <li> 
                    <Link to="/">HomeSweetHome</Link>
                </li>
                <li>
                    <Link to="/blogs">Blog</Link>
                </li>
                <li> <Link to="/contact">Contact Us</Link></li>

            </ul>
        </nav>
        <hr/>
        <Outlet/>
        </>
    )
}
export default Layout;