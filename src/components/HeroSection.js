import "./HeroSection.css";
import pen from '../assets/pen.png';
import styled, {keyframes} from 'styled-components'
import {fadeInUp} from 'react-animations'

const Fade = styled.div`
animation: 2s ${keyframes`${fadeInUp}`}
`;

const HeroSection = () => {

    return (
        <div className="heroSection" id='home'>
            <Fade>
            <div className="left_container">
                <div className="left_contents">
                <h3>NOUS VALORISONS LA</h3><br/>
                <h1>CLARTE ></h1><br/><br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button className="savoir_btn">En savoir plus</button>
                </div>
            </div>
            </Fade>
            <Fade>
            <div className="right_container">
                <div className="right_contents">
                    <img src={pen} alt=''/>
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default HeroSection;
