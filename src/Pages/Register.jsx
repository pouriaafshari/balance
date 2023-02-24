import { Outlet, Link } from "react-router-dom";
import logo from './Logo.png';
import "./Register.css";

export const Register = () => {
  return (
    <div className="login">
        <img src={logo}></img>
        <h1>ثبت نام</h1>
        <input placeholder='First name' type="text" />
        <input placeholder='Fmily name' type="text" />
        <input placeholder='Phone number' type="text" />
        <input placeholder='Password' type="password" />
        <a href='#'>فراموشی رمز عبور</a>
        <button>ثبت نام</button>
        <Link to="/login">
            <button>ورود</button>
        </Link>
    </div>
  )
}

export default Register;