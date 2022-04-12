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
                <h3>NOUS VALORISONS LA</h3><br/>
                <h1>CLARTE <i className='fas fa-chevron-right'></i></h1><br/><br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
