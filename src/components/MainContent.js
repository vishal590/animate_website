import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import SmallHeading from './SmallHeading'
import Blockc from '../img/blockchain.jpg'
import CtaButton from './CtaButton'
import MobileNav from './MobileNav'


const MainContent = () => {
    return (
        <MainContentStyled>
            <MobileNav/>
            <Navigation />
            <div className="content">
                <div className="left">
                    <SmallHeading title={'Currency in digital place'} identifier={'Before'} />
                    <h1>The best place to collect, buy and sell. <span className='GradientText'>NFT</span> </h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>

                    <div className="btns-con">
                        <CtaButton name={'discovere more'} />
                        <CtaButton name={'learn'} />
                    </div>
                </div>
                <div className="right">
                    <img src={Blockc} alt='coin' />
                </div>
            </div>

        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
    position:absolute;
    top:0;
    left:50%;
    width:80%;
    height:100%;
    transform:translateX(-50%);
    .content{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        height:100%;
        width:100%;
        @media (max-width: 800px) {
            display:flex;
            flex-direction:column;
            justify-content: center;
            .right{
                display:none;
            }
          }
        .left{
            display:flex;
            justify-content:center;
            flex-direction:column;
            h1{
                padding: 1.6rem 0;
                @media (max-width: 800px) {
                    font-size: 1.7rem;
                  }
            }
            p{
                margin-bottom:2rem;
                color:#C9B41E;
                font-weight:700;
                opacity:0.8;
                @media (max-width: 800px) {
                    font-size: 1rem;
                  }
                  @media (max-width: 430px) {
                    display:none;

                  }
            }
        }
        .right{
            display:flex;
            align-items:center; 
            @media (max-width: 800px) {
                display:none;
              }
            img{
                width:100%;                
                clip-path: circle(40%);  
                overflow: hidden;
                transition-duration: 0.8s;
                transition-property: transform;
                &:hover{
                    transform: rotate(360deg);
                }
            }
                }
    }
        
        
}
`;

export default MainContent
