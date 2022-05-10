import { Link } from "react-router-dom";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import "./video.css"
export default function Video(props) {
    return <>

        <div className="videoPost">
            <a href={props.vidUrl} target="_blank">
                <img className="videoPostImg" src={props.imgUrl} />
            </a>

            <div className="videoPostInfo">
                <div className="videoPostCats">
                    <span className="videoPostCat"> {props.postCategory}</span>
                </div>
                <hr />
                <a href={props.vidUrl} className="videoPostTitle" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank">{props.postTitle}</a>
                <span className="videoPostDate">04-10-2022</span>
            </div>
            <p className="videoPostDesc">
                {props.postDescription}
            </p>
            
            </div>
    </>
}