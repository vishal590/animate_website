import React from 'react'
import styled from 'styled-components'
// import data from './data'
import Women from '../img/women.jpg'

const SellerCard = ({title, para}) => {
    return (
        <SellerCardStyled>          
            <div className="SellerCard">
                {/* <div className='number'>
                    <p>0 {item.id}</p>
                </div> */}
                <div className='profile'>
                    <div className='imgg'>
                        <img src={Women} alt="women"/>
                    </div>
                    <div className='text'>
                        <h4>{title}</h4>
                        <p>{para}</p>
                    </div>
                </div>
            </div>
               
        </SellerCardStyled>
    )
}

const SellerCardStyled = styled.div`
    border-radius:15px;
    background:linear-gradient(120deg, rgb(208,188,28), rgb(116,80,52));
    background-color: rgba(255,255,255, 0.09);
    transition: all .3s ease-in-out;
    &:hover{
        transform:translateY(-10px);
    }
    .SellerCard{
        display:flex;
        align-items:center;
        padding:1.5rem 1rem;
        .profile{
            display:flex;
            flex-direction:column;
            .imgg{
                text-align:center;
            }
                img{
                    width:70px;
                    height:70px;
                    border-radius:50%;
                    object-fit:cover;
                    border: 2px solid gray;
                }
            .text h4{
                font-size:16px;
                color:blue;
                text-align:center;
            }
            .text p{
                font-size:13px;
                color:white;
                text-align:justify;
                }
        }
    }
`;

export default SellerCard
