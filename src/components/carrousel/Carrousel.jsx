import React from 'react'
//Elements
import { CarrouselContainer, ContainerArrow, ContentCarousel, Arrow } from '../../elements/carrousel';
//Images
import { ReactComponent as ArrowLeft } from '../../Images/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../Images/arrowRight.svg';

const Carrousel = () => {
  return (
    <CarrouselContainer>
        <ContainerArrow>
            <Arrow>
                <ArrowLeft />
            </Arrow>
        </ContainerArrow>

        <ContentCarousel>
            <div>
                <h2>We love our clients!</h2>
                <p>Need help with your project?</p>
                <button>Get in Touch!</button>
            </div>
        </ContentCarousel>

        <ContainerArrow>
            <Arrow>
                <ArrowRight />
            </Arrow>
        </ContainerArrow>
    </CarrouselContainer>
  )
}

export default Carrousel