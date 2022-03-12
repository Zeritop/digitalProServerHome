import React from 'react'
//Elements
import { ContainerFeatureds, GridFeatureds, Ellipse, ContentFeatured } from '../../elements/featureds/index';
//Images
import {  ReactComponent as MobilePhone } from '../../Images/mobilephone.svg';
import { ReactComponent as WaterDrop } from '../../Images/blood_drop.svg';
import { ReactComponent as Random } from '../../Images/random.svg';

const Featureds = () => {
  return (
    <ContainerFeatureds>
        <GridFeatureds>
            <ContentFeatured>
                <Ellipse>
                    <MobilePhone />
                </Ellipse>
                    <h2>100% Responsive</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium alias facilis, mollitia odio suscipit cum qui? Iure quos reiciendis, ab reprehenderit  
                    <span>⏩</span> 
                    </p>
            </ContentFeatured>

            <ContentFeatured>
                <Ellipse>
                    <WaterDrop />
                </Ellipse>
                <h2>Unlimited Colors</h2>
                <p>dolores eligendi sapiente tempora eos veritatis rerum exercitationem, incidunt maiores sit modi ratione, quisquam nihil deserunt architecto.<span>⏩</span> </p>
            </ContentFeatured>

            <ContentFeatured>
                <Ellipse>
                    <Random />
                </Ellipse>
                <h2>Incredibly Flexible</h2>
                <p>Eos doloremque saepe omnis, magnam perferendis incidunt unde mollitia ad odio.
                    cum laboriosam officiis dolor cupiditate ad earum animi assumenda ratione commodi 
                    <span>⏩</span> 
                </p>
            </ContentFeatured>

        </GridFeatureds>
    </ContainerFeatureds>
  )
}

export default Featureds