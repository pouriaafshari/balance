import Login from './Pages/Login.jsx';
import Register from './Pages/Register';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Navbar from './Pages/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import Diets from './Pages/Diets.jsx';
import Blog from './Pages/Blog.jsx';


function App() {

  const Layout = ()=>
  {
    return (
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/diets",
          element: <Diets/>
        },
        {
          path: "/profile",
          element: <Profile/>
        },
        {
          path: "/blog/:id",
          element: <Blog/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
