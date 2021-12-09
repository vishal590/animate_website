import React from 'react'
import SmallHeading from './SmallHeading';
import styled from 'styled-components';


const MainTitle = ({title,subtitle,para,identifier}) => {
    return (
        <MainTitleStyled>
            <SmallHeading title={subtitle} identifier='Before'/>
            <h2>
                {title}
            </h2>
            <p>
                {para}
            </p>
        </MainTitleStyled>
    )
}

const MainTitleStyled = styled.div`
    h2{
        padding-top:1rem;
        color: #60048e;
        font-weight: 900;
    }
    p{
        padding:1.2rem 0;
        opacity:0.7;
        color: #60048E;
        font-weight: 600;
        text-transform: capitalize;
    }
`;

export default MainTitle
