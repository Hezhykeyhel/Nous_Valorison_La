import "./Navbar.css";
import { Link } from "react-scroll";
import logo from '../assets/logo.png'

const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            <div className="navigation_logo">
                <img src={logo} className='myLogo' alt='myLogo'/>
                <h2 className="navlogo_h2">BARBE & CIMON NOTAIRES</h2>
            </div>
            {/* {links} */}
            <ul className="navbar_links">
            <li><Link to='home' className="nav_link" spy={true} offset={-100} duration={500}>A propos</Link></li>
            <li><Link to='services' className="nav_link" spy={true} offset={0} duration={500}>Nos Services</Link></li>
            <li><Link to='articles' className="nav_link" spy={true} offset={10} duration={500}>Articles</Link></li>
            <li><Link to='footer' className="nav_link" spy={true} offset={-50} duration={500}>Contact</Link></li>
            <li><Link to='footer' className="nav_link" spy={true} offset={-50} duration={500}>EN</Link></li>
            </ul>
            {/* {Hamburger-Menu} */}
            <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )

    }

export default Navbar;
