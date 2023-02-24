import { Outlet, Link } from "react-router-dom";
import karina from '../Pages/karina.jpg';
import "./Home.css";

export const Blog = () => {
  return (
    <div className="blog">
        <button className="back">Back</button>
        <button className="like">Like</button>
        <img src={karina} alt="AESPA karina" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis velit quis, vitae illo architecto quam dolorum itaque dolorem voluptatem, consequuntur qui voluptas vero officia, aspernatur voluptatibus porro a perferendis quia.</p>
    </div>
  )
}

export default Blog;