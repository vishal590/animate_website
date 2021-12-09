import React from 'react'
import { SectionStyled } from '../Layouts';
import MainTitle from './MainTitle';
import styled from 'styled-components';
import Entrepr from '../img/entrepr.jpg'

const BlogSection = () => {
    return (
        <BlogSectionStyled>
            <SectionStyled>
                <div className='parent-blogs'>
                    <div className='title-con'>
                        <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '} />
                    </div>
                    <div className='blogs'>
                        <div className='blog'>
                            <div className='image'>
                                <img src={Entrepr} alt='man'/>
                            </div>
                            <h6>Lorem ipsum</h6>
                            <div className='user'>
                                <p>Entrepreneur:</p>
                                <p>Lorem ipsum dolor </p>

                            </div>
                        </div>
                        <div className='blog'>
                            <div className='image'>
                                <img src={Entrepr} alt='man'/>
                            </div>
                            <h6>Lorem ipsum</h6>
                            <div className='user'>
                                <p>Entrepreneur:</p>
                                <p>Lorem ipsum dolor </p>

                            </div>
                        </div>
                        <div className='blog'>
                            <div className='image'>
                                <img src={Entrepr} alt='man'/>
                            </div>
                            <h6>Lorem ipsum</h6>
                            <div className='user'>
                                <p>Entrepreneur:</p>
                                <p>Lorem ipsum dolor </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </SectionStyled>
        </BlogSectionStyled>
    )
}

const BlogSectionStyled = styled.div`
.parent-blogs{
    background:linear-gradient(120deg, rgb(208,188,28), rgb(116,80,52));
    .blogs{
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap:2rem;
        padding:2rem 0;
        @media (max-width: 1050px) {
            grid-gap: 1rem;
            padding-top: 1.5rem;
          }
        @media (max-width: 750px) {
            display:flex;
            flex-direction:column;
          }
        .blog{
            background:;
            border-radius:15px;
            .image{
                height:300px;
                width:50%;
                overflow:hidden;
                margin: 0 auto;
                border-top-left-radius:20px;
                border-top-right-radius:20px;
                transition:all .4s ease-in-out;
                img{
                    height:100%;
                    width:100%;
                    border-top-left-radius:20px;
                    border-top-right-radius:20px;
                    transition:all .4s ease-in-out;
                    object-fit:cover;
                    filter:grayscale(50%);
                    &:hover{
                        filter:grayscale(0);
                        transform:scale(1.2) rotate(4deg);
                    }
                }
            }

            h6{
                font-weight:900;
                font-size:1.3rem;
                padding-top:1rem;
                padding-left:1rem;
                padding-right:1rem;
                text-align:center;
                color:#60048e;
                @media (max-width: 750px) {
                    padding:1rem 0;
                  }
                
            }
            
            .user{
                margin:0 auto;
                font-size:1rem;
                padding-top: .2rem;
                padding-bottom: 1.5rem;
                padding-left:1rem;
                padding-right:1rem;
                display:flex;
                p:first-child{
                    padding-right:0.4rem;
                }
                @media (max-width: 750px) {
                    display:none;
                    padding:1rem 0;
                  }
            }
        }
    }

    
}
`;

export default BlogSection
