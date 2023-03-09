import { Outlet, Link } from "react-router-dom";
import './Navigation.css'
const Layout = () => {
  return (
    <>
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link to="/">Post</Link>
        </li>
        <li>
          <Link to="/get">Get</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
      </ul>
    </nav>
  
    <Outlet />
  </>
  
  )
};

export default Layout;