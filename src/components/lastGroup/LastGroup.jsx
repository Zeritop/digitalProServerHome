import React from 'react'
//Elements
import { ContainerLastGroup, GridGroup, ContainerGrid, FirstGrid } from '../../elements/lastGroup/index';
//Components
import LatestNews from '../latestNews/LatestNews';
import AboutUs from '../aboutUs/AboutUs';
import Testimonials from '../testimonials/Testimonials';

const LastGroup = () => {
  return (
    <ContainerLastGroup>
      <ContainerGrid>
        <GridGroup>

          <FirstGrid>
            <LatestNews />
          </FirstGrid>

        <div>
            <AboutUs />
        </div>

        <div>
            <Testimonials />
        </div>
        
        </GridGroup>
      </ContainerGrid>
    </ContainerLastGroup>
  )
}

export default LastGroup