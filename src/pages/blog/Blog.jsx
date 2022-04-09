import { Link } from "react-router-dom";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./blog.css"
export default function Blog() {
  return <>

  {/* <Link className="buttonNewPost" to="/write">
    <button className="button">
    <i class="buttonIcon fa-solid fa-pen-to-square"></i>
    <b> New Post </b>
    </button>
    </Link> */}
  
  <div className="blog">
    
      <Posts/>
     
      <Sidebar/> </div> 
     </> 
}