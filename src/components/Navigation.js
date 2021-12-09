import React from 'react'
import styled from 'styled-components';
import Logo from '../img/logo2.jpg'

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>

            <ul className="nav-items">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">fj</a>
                </li>
                <div className="primary-btn">Connect</div>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    min-height:10vh;
   
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width:800px){
        display:none;
    }
    .logo{
        img{
        width:80px;
        height:80px;
        }
    }
    .nav-items{
        display:flex;
        align-items:center;
        li{
            margin:0 1rem;
        }
        .primary-btn{
            margin-left:3rem;
            background-color:rgba(160,132,40, 1);
            padding: .6rem .8rem;
            border-radius:40px;
            cursor:pointer;
            &:hover{
                background-color:rgba(160,132,40, 0.7);
            }
        }
    }
`;

export default Navigation
