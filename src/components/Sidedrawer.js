import "./Sidedrawer.css";
import {Link} from "react-scroll";
import styled, {keyframes} from 'styled-components'
import {fadeIn} from 'react-animations'

const Fade = styled.div`
animation: 2s ${keyframes`${fadeIn}`}
`;


const Sidedrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];
    if(show){
        sideDrawerClass.push("show");
    }
    return (
        <Fade>
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer_links" onClick={click}>
                <li><Link to='home' spy={true} offset={-100} duration={500}>A Prospos</Link></li>
                <li><Link to='services' spy={true} offset={-100} duration={500}>Nos Service</Link></li>
                <li><Link to='articles' spy={true} offset={-100} duration={500}>Articles</Link></li>
                <li><Link to='footer' spy={true} offset={-100} duration={500}>Contact</Link></li>
                <li><Link to='footer' spy={true} offset={-100} duration={500}>En</Link></li>
            </ul>
        </div>
        </Fade>
    )
}

export default Sidedrawer;
