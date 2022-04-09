import "./sidebar.css"
export default function Sidebar() {
  return <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle"> ABOUT US</span>
              <img className="sidebarImg" src= "https://media.istockphoto.com/photos/smiling-woman-posing-in-glasses-picture-id876629044?k=20&m=876629044&s=170667a&w=0&h=91nOkZ-Qbfr39hCxlO8Bt0O2QwqzRibf0wWx6CMGjqM="/>         
            <p className="sidebarDesc">We are a group of blockchain enthusiasts educating the world on Crypto, DeFi, and all things blockchain tech related!</p>
      </div>
      <div className="sidebarItem">
          <hr/>
          <span className="sidebarTitle">CATEGORIES</span>
          <hr/>
          <ul className="sidebarList">
              <li className="sidebarListItem"> Traditional Tech</li>
              <li className="sidebarListItem"> Blockchain Tech</li>
              <li className="sidebarListItem"> Trading</li>
              <li className="sidebarListItem"> DeFi</li>
          </ul>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <ul className="sidebarSocial">
              <li className="topIcon fab fa-youtube-square"></li>
              <li className="topIcon fab fa-twitter-square"></li>
              <li className="topIcon fab fa-instagram-square"></li>
          </ul>
      </div>
  </div>;
}
