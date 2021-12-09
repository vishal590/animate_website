import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import MainTitle from './MainTitle'
import GradientCard from './GradientCard'
// import OldMan from './img/'
import CtaButton from './CtaButton'
import Crp from '../img/crp.jpg'

const DemonstrationSection = () => {
    const ctaB = <CtaButton name={'Bid'}/>

    return (
        <DemonstrationSectionStyled>
            <SectionStyled>
                <div className='title-con'>
                    <MainTitle title={'Live Demonstration'} subtitle={'Live'} />
                </div>

                <div className='gradient-cards-con'>
                    <GradientCard image={Crp} prize={'$122'} title={'Buy Crypto'} cta={ctaB} />
                    <GradientCard image={Crp} prize={'$122'} title={'Buy Crypto'} cta={ctaB} />
                    <GradientCard image={Crp} prize={'$122'} title={'Buy Crypto'} cta={ctaB} />
                    <GradientCard image={Crp} prize={'$122'} title={'Buy Crypto'} cta={ctaB} />
                </div>

            </SectionStyled>
        </DemonstrationSectionStyled>
    )
}

const DemonstrationSectionStyled = styled.div`


`;

export default DemonstrationSection
