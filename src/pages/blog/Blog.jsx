import { Link, useNavigate } from "react-router-dom";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./blog.css";
import Button from '@mui/material/Button';
import { auth } from "../../firebase";
import { display } from "@mui/system";
import { FirebaseError } from "firebase/app";

export default function Blog() {

  let navigate = useNavigate();

  return <>

    {/* { auth.currentUser.uid === "SuAGgsXWt7NhSrz4ZkWx2U8C6Ay2" ? (<button onClick={() => navigate("/write")} className="button">
    <i class="buttonIcon fa-solid fa-pen-to-square"></i>
    <b> New Post </b>
    </button>) : ("") }  */}
    
    {/* <button onClick={() => navigate("/write")} className="button">
    <i className="buttonIcon fa-solid fa-pen-to-square"></i>
    <b> New Post </b>
    </button> */}
  
  <div className="blog">
    
      <Posts/>
     
      <Sidebar/> </div> 
     </> 
}