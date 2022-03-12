import React from 'react'
//Elements
import { ContainerPartners, PartnersC, TextP, ImagesP } from '../../elements/partners/index';
//Images
import themeForest from '../../Images/themeforest-logo.png';
import codeCanyon from '../../Images/code-canyon.png';
import graphicRiver from '../../Images/graphicriver.png';

const Partners = () => {
  return (
    <ContainerPartners>
        <PartnersC>
            <TextP>
                <h2>Our Partners</h2>
                <p>Meet to our partners</p> 
            </TextP>
            
            <ImagesP>
                <img src={themeForest} alt="themeForest" />
            </ImagesP>
            <ImagesP>
                <img src={codeCanyon} alt="codeCanyon" />
            </ImagesP>
            <ImagesP>
                <img src={graphicRiver} alt="graphicRiver" />
            </ImagesP>
        </PartnersC>
    </ContainerPartners>
  )
}

export default Partners