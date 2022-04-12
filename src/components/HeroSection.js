import "./HeroSection.css";
import pen from '../assets/pen.png';
import styled, {keyframes} from 'styled-components'
import {fadeInLeftBig, fadeInRightBig} from 'react-animations'

const Fade = styled.div`
animation: 2s ${keyframes`${fadeInLeftBig}`}
`;
const Fade2 = styled.div`
animation: 2s ${keyframes`${fadeInRightBig}`}
`;
const HeroSection = () => {

    return (
        <div className="heroSection" id='home'>
            <Fade>
            <div className="left_container">
                <div className="left_contents">
                <h3 className="nous">NOUS VALORISONS LA</h3><br/>
                <h1 className="valor">CLARTE <i className='fas fa-chevron-right'></i></h1><br/><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. utenim ad minim venaim, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="savoir_btn">En savoir plus</button>
                </div>
            </div>
            </Fade>
            <Fade2>
            <div className="right_container">
                    <img className='right_img' src={pen} alt=''/>
            </div>
            </Fade2>
        </div>
    );
}

export default HeroSection;
