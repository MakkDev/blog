import { storage } from "../../firebase";
import "./header.css"
import HeaderCover from '../../images/HeaderCover.gif'


export default function Header() {
    return <div className='header'>
        <div className="headerTitles">
            <img className="headerImg" src={HeaderCover} />
        </div>
    </div>;   
} 