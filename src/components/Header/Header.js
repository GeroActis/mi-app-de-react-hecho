import "./Header.css";
import {Link} from "react-router-dom";

const Header = ({user}) => {

    return(
        <nav>
            <ul className="main-nav">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                <li>elemento menu</li>
            </ul>
            <ul className="user">
                <li>
                    {user} <img src="./img/user.jpg" alt="" />
                </li>
            </ul>
        </nav> 
    )
}
export default Header