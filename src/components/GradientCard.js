import React from 'react'
import styled from 'styled-components';
import CtaButton from './CtaButton';



const GradientCard = ({image, avatar, title, name}) => {
    return (
        <GradientCardStyled>
            <div className='g-card'>
                <div className='inner-content'>
                    <div className='image'>
                        <img src={image} alt='pro' />
                        <div className='name'>
                            <img src={avatar} alt='' />
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className='card-content'>
                        <h6 className='card-name'>{title}</h6>
                        <p>Price <span className='price'>$100</span></p>
                        <div className='duration'>
                            <p>10:00&nbsp;am</p>
                        </div>
                        <div className='ctab'>
                            <CtaButton name={'More'}/>
                        </div>
                    </div>
                </div>
            </div>
        </GradientCardStyled>
    )
}

const GradientCardStyled = styled.div`
    border-radius:20px;
    font-size:1rem;
    transition: all .4s ease-in-out;

    .g-card{
        margin:2rem;
        .inner-content{
            background:#CAB43B;
            animation:gradient 5s infinite;
            @keyframes gradient{
                0%{
                    background:#CFBB4E;
                }
                50%{
                    background:#CAB43B ;
                }
                100%{
                    background:#cfbb4e;
                }
            }

            padding: .8rem;
            border-radius:20px;
            .image{
                width:100%
                position:relative;
                img:first-child{
                    width:100%;
                    object-fit:cover;
                    height:300px;
                    border-radius:10px;
                }

                .name{
                    position:relative;
                    left:50%;
                    bottom: -27px;
                    background-color: #03091f;
                    display:flex;
                    align-items:center;
                    transform:translateX(-50%);
                    width:75%;
                    padding: .5rem .5rem;
                    border: 1px solid rgba(255,255,255,0.8);
                    img{
                        width:25px;
                        height:25px;
                        border-radius: 50%;
                        object-fit:cover;
                    }
                }
            }

            .card-content{
                padding-top:3rem;
                h6{
                    color:#60048E;
                    font-weight:bolder;
                    font-size:10px
                }
                                
                .card-name{
                    font-size:1.3rem;
                    font-weight:500;
                    padding-bottom: .6rem;
                }

                .ctab{
                    text-align:center;
                }

                .price{
                    color:#60048E;
                    }

                .duration{
                    margin-top:1rem;
                    border-top: 2px solid rgba(255,255,255, 0.5);
                    display:flex;
                    justify-content;space-between;
                    p{
                        display:flex;
                        align-items:center;
                       
                    }
                }
            }
        }
    }
`;

export default GradientCard
