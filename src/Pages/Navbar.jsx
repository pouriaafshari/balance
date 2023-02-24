import { Outlet, Link } from "react-router-dom";
import "./Home.css";

export const Navbar = () => {
  return (
    <div>
        <div className="nav-bar">
            <Link to={"/profile"}>
                <button>profile</button>
            </Link>
            <Link to={"/"}>
                <button>home</button>
            </Link>
            <Link to={"/diets"}>
                <button>diets</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;