import Home from "../../pages/home/home";
import "./topbar.css";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth"
import { useContext, useEffect, useState } from 'react'
import { urlContext } from "../../context";


export default function TopBar() {

    const { url, setUrl } = useContext(urlContext);
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
            <img className="topLeftImg" src="https://i.ibb.co/Kb324Wy/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-PGBG2-7.png" />
            <div className="topIcons">
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.instagram.com/makk.eth/" target="_blank"> <i className="topIcon fab fa-instagram-square" /> </a>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.youtube.com/channel/UCEnP8E_-fWRKPGxp48dDUkg" target="_blank"> <i className="topIcon fab fa-youtube-square"></i> </a>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://github.com/MakkDev" target="_blank"> <i className="topIcon fab fa-github-square"></i> </a>
            </div>

        </div>
        <div className="topCenter">
            <ul className="topCenterList">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="topListItem">HOME</Link>
                <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }} className="topListItem">BLOG</Link>
                <Link to="/videos" style={{ textDecoration: 'none', color: 'inherit' }} className="topListItem">VIDEOS</Link>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }} className="topListItem">CONTACT</Link>
                <a  style={{ textDecoration: 'none', color: 'inherit' }} href="https://github.com/MakkDev" target="_blank" className="topListItem">GITHUB</a>
                {auth.currentUser ? (<>
                    <li onClick={handleSignOut} className="topListItem">SIGN OUT</li>                
                </>) : (
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }} className="topListItem">LOGIN</Link>)
                }
            </ul>
        </div>
        <div className="topRight">
            <img className="topRightImg" src={url} />
        </div>
    </div>

}

// { auth.currentUser ? (<> <Link to="/profile" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">PROFILE</Link>
//                 <li onClick={handleSignOut} className="topListItem">SIGN OUT</li></>) : (
//                 <Link to="/login" style={{ textDecoration: 'none', color:'inherit' }} className="topListItem">LOGIN</Link>)
//                 }

