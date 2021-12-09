import React from 'react'
import styled from 'styled-components';


const CtaButton = ({name}) => {
    return (
        <CtaButtonStyled>
            {name}
        </CtaButtonStyled>
    )
}

const CtaButtonStyled = styled.a`
    text-transform:uppercase;
    display:inline-block;
    padding:0.9rem 1.5rem;
    border-radius:8px;
    font-size:1rem;
    font-weight:500;
    cursor:pointer;
    background:linear-gradient(120deg, rgb(208,188,28), rgb(116,80,52));
    margin:0 0 0 1rem;
    &:hover{
        background:#815F30;
    }
    @media (max-width: 430px) {
        padding:0.6rem 1rem;
    }
    @media (max-width: 361px) {
        font-size:0.7rem;
       

    }
    
`;

export default CtaButton
