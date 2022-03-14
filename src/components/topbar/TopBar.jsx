import Home from "../../pages/home/home";
import "./topbar.css";
import { Link} from 'react-router-dom';
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from 'react'


export default function TopBar(props) {

    const handleSignOut = () => {
        signOut(auth).catch((error) => alert(error.message));
    }
    
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        })
    })

    return <div className="top">
        <div className="topLeft">
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-facebook-square"></i>
        </div>
        <div className="topCenter"> 
            <ul className="topCenterList">
                <Link to="/" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">HOME</Link>
                <Link to="/blog" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">BLOG</Link>
                <a style={{ textDecoration: 'none', color:'inherit' }}  href="https://www.youtube.com/channel/UCEnP8E_-fWRKPGxp48dDUkg" target="_blank"> <li className="topListItem">VIDEOS</li> </a>
                <li className="topListItem">CONTACT</li>
                { auth.currentUser ? (<> <Link to="/profile" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">PROFILE</Link>
 <li onClick={handleSignOut} className="topListItem">SIGN OUT</li></>) : (
                <Link to="/login" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">LOGIN</Link>)
                }
            </ul>
        </div>
        <div className="topRight"> 
        <img className="topImg"src={props.profileUrl} />
        <i className="topSearchIcon fas fa-search"></i>

         </div>
    </div>

}

