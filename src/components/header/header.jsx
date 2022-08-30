import { storage } from "../../firebase";
import "./header.css"
import HeaderCover from '../../images/HeaderCover.gif'
import Posts from "../posts/Posts";
import Videos from "../videos/Videos";


export default function Header() {
    return <div className='header'>
        <div className="posts__title title">Recent Blog Posts</div>
        <Posts/>
        <div className="videos__title title">Recent Videos</div>
        <Videos/>
    </div>;   
} 