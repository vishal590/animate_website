import React from 'react'
import styled from 'styled-components'
import MainTitle from './MainTitle'
import { InnerLayout } from '../Layouts'
import SellerCard from './SellerCard'
import BlogSection from './BlogSection';
import GradientCard from './GradientCardSection'
import GradientCardSection from './GradientCardSection'
import DemonstrationSection from './DemonstrationSection'
import ContactSection from './ContactSection'

const BodyContent = () => {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top seller'} subtitle={'All Winners'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}/>
                <div className="sellercards">
                    <SellerCard title={'Lorem Ipsum'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <SellerCard title={'Lorem Ipsum'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <SellerCard title={'Lorem Ipsum'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </InnerLayout>
            <BlogSection/>
            <GradientCardSection/>
            <DemonstrationSection/>
            <ContactSection/>
            <footer>
                <p>Copyright Reserve rights</p>
            </footer>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.main`
    .sellercards{
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap:2rem;
        margin:2rem 0;
        @media (max-width: 750px) {
            display:flex;
            flex-direction:column;
          }
    }
    
    footer{
        display:flex;
        align-items:center;
        justify-content:center;
        padding:1rem 0;
        background:linear-gradient(120deg, rgb(208,188,28), rgb(116,80,52));
    }
`;  

export default BodyContent
