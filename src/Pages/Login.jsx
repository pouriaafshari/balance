import { Outlet, Link } from "react-router-dom";
import logo from './Logo.png';
import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
        <img src={logo}></img>
        <h1>ورود</h1>
        <input placeholder='Phone number' type="text" />
        <input placeholder='Password' type="password" />
        <a href='#'>فراموشی رمز عبور</a>
        <button>ورود</button>
        <Link to="/register">
          <button>ثبت نام</button>
        </Link>
    </div>
  )
}

export default Login;