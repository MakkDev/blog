import { Link } from "react-router-dom";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import "./video.css"
export default function Video(props) {
    return <>

        <div className="post">
            <a href={props.vidUrl} target="_blank">
                <img className="postImg" src={props.imgUrl} />
            </a>

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat"> {props.postCategory}</span>
                </div>
                <hr />
                <a href={props.vidUrl} className="postTitle" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank">{props.postTitle}</a>
                <span className="postDate">1 Hour Ago</span>
            </div>
            <p className="postDesc">
                {props.postDescription}
            </p>
            
            </div>
    </>
}