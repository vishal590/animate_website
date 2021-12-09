import React from 'react'
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import NewMan from '../img/newman.jpg'
import Bitcoin from '../img/bitcoin_img.jpg'
const GradientCardSection = () => {
    return (
        <GradientCardSectionStyled>
            <SectionStyled>
            <div className='title-con'>
                <MainTitle title={'New Blogs'} subtitle={'Our Blogs'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '} />
            </div>
            <div className='gradient-cards-con'>
                <GradientCard image={NewMan} avatar={Bitcoin} name={'Conor Mcgregor'} prize={'$122'} title={'Lorem ipsum'} />
                <GradientCard image={NewMan} avatar={Bitcoin} name={'Conor Mcgregor'} prize={'$122'} title={'Lorem ipsum'} />
                <GradientCard image={NewMan} avatar={Bitcoin} name={'Conor Mcgregor'} prize={'$122'} title={'Lorem ipsum'} />
                <GradientCard image={NewMan} avatar={Bitcoin} name={'Conor Mcgregor'} prize={'$122'} title={'Lorem ipsum'} />
            </div>
            </SectionStyled>
        </GradientCardSectionStyled>
    )
}

const GradientCardSectionStyled = styled.div`

`;

export default GradientCardSection
