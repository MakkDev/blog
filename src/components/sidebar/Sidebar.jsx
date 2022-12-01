import "./sidebar.css"
import greenBG from '../../images/greenBG.png'

export default function Sidebar() {
    return <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle"> ABOUT US</span>
            <img className="sidebarImg" src={greenBG} />
            <p className="sidebarDesc">We are a group of blockchain enthusiasts educating the world on Crypto, DeFi, and all things blockchain tech related!</p>
        </div>
        <div className="sidebarItem">
            <br />
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem"> Traditional Tech</li>
                <li className="sidebarListItem"> Blockchain Tech</li>
                <li className="sidebarListItem"> Trading & Investing</li>
                <li className="sidebarListItem"> Decentralized Finance</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <ul className="sidebarSocial">
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.instagram.com/makk.eth/" target="_blank"> <i className="topIcon fab fa-instagram-square" /> </a>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.youtube.com/channel/UCEnP8E_-fWRKPGxp48dDUkg" target="_blank"> <i className="topIcon fab fa-youtube-square"></i> </a>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://github.com/MakkDev" target="_blank"> <i className="topIcon fab fa-github-square"></i> </a>
            </ul>
        </div>
    </div>;
}
