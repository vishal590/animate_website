import React from 'react';
import styled from 'styled-components';
import Crypto from '../img/bitcoin.mp4'
import BitcoinImg from '../img/bitcoin_img.jpg'
import { InnerLayout } from '../Layouts';
import MainContent from './MainContent';

const MainArea = () => {
    return (
        <MainAreaStyled>
            <video src={Crypto} className="video_c" muted playsInline autoPlay loop></video>
            <img src={BitcoinImg} alt="bitcoinimg" className="overlay"/>
            <InnerLayout>
                <MainContent/>
            </InnerLayout>
        </MainAreaStyled>
    )
}

const MainAreaStyled = styled.div`
    width:100%;
    height:100vh;
    position:relative;
    overflow:hidden;
    .video_c{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    .overlay{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        right:0;
        opacity:0.4;
    }
`;
export default MainArea;


