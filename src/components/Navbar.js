import "./Navbar.css";
import { Link } from "react-router-dom";
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
                <li>
                    <Link to="/" className="cart_link">
                        <span>A PROPOS</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart_link">
                        <span>NOS SERVICES</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart_link">
                        <span>ARTICLES</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart_link">
                        <span>CONTACT</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart_link">
                        <span>EN</span>
                    </Link>
                </li>
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
