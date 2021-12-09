import React from 'react'
import styled from 'styled-components'

const SmallHeading = ({title, identifier}) => {
    return (
        <SmallHeadingStyled>
            <h3 className={identifier}>{title}</h3>
        </SmallHeadingStyled>
    )
}

const SmallHeadingStyled = styled.div`
    h3{
        background: linear-gradient(120deg, rgb(208,188,28), rgb(116,80,52));
        background-clip:text;
        display:inline-block;
        padding: 0 1rem 0 3rem;
        border-radius: 4px;
        @media (max-width: 769px) {
            h3{
                font-size: 1.2rem;
            }
            
          } 
    }
`;

export default SmallHeading
