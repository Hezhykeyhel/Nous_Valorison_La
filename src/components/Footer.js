import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer_container" id='footer'>
            <div className="footer_left_container">
                <img src={logo} alt='logo'/>
                <h2>BARBE & CIMON NOTAIRES</h2>
            </div>
            <div className="footer_right_container">
                <div className="footer_left_right_contents">
                    <ul className='footer_list_header'>
                    <li><Link to='home' spy={true} offset={-100} duration={500}>A propos</Link></li>
                    <li><Link to='services' spy={true} offset={-100} duration={500}>service</Link></li>
                    <li><Link to='articles' spy={true} offset={-100} duration={500}>articles</Link></li>
                    <li><Link to='footer' spy={true} offset={-100} duration={500}>contacts</Link></li>
                    </ul>
                </div>
            <div className='footer_right_right_container'>
                <h5>bureau</h5><br/>
                <small>101, boulevard saints<br/>
                joseph o, montreal, qc h2t 2p7
                </small><br/><br/>
                <h5>nous suivre</h5>
            </div>
            </div>
        </div>
  )
}

export default Footer