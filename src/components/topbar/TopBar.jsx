import Home from "../../pages/home/home";
import "./topbar.css";
import { Link} from 'react-router-dom';
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth"
import { useContext, useEffect, useState } from 'react'
import { urlContext } from "../../context";


export default function TopBar() {

    const {url, setUrl} = useContext(urlContext);
    const [user, setUser] = useState([]);

    const handleSignOut = () => {
        signOut(auth).catch((error) => alert(error.message));
    }
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        })
    })

    return <div className="top">
        <div className="topLeft">
            <img className="topLeftImg" src="https://i.ibb.co/Kb324Wy/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-PGBG2-7.png"/>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-facebook-square"></i>
        </div>
        <div className="topCenter"> 
            <ul className="topCenterList">
                <Link to="/" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">HOME</Link>
                <Link to="/blog" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">BLOG</Link>
                <Link to="/videos" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">VIDEOS</Link>
                <Link to="/contact" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">CONTACT</Link>
                { auth.currentUser ? (<> <Link to="/profile" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">PROFILE</Link>
                <li onClick={handleSignOut} className="topListItem">SIGN OUT</li></>) : (
                <Link to="/login" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">LOGIN</Link>)
                }
            </ul>
        </div>
        <div className="topRight"> 
        <img className="topRightImg"src={url} />
        <i className="topSearchIcon fas fa-search"></i>

         </div>
    </div>

}

