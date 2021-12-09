import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts';


const ContactSection = () => {
    return (
        <ContactSectionStyled>
            <SectionStyled>
                <div className='contact-info'>
                    <h3 className='contact-title'>Contact Us</h3>
                    <p>30 Avenue Street, United States</p>
                    <p>xy@gmail.com</p>
                </div>
            </SectionStyled>
        </ContactSectionStyled>
    )
}

const ContactSectionStyled = styled.div`
    background:#020C31;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    position:relative;
    padding:4rem 0;
    z-index:1;
    opacity:0.95;
    p{
        opacity:0.5;
    }
    .bg-image{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%);
        
    }
`;

export default ContactSection
