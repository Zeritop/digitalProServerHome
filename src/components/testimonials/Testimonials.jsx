import React from 'react'
//Elements
import { SubTitle } from '../../elements/subTitle';
import { 
  ContainerTestimonials,
  Testimonial,
  DiseñoTestimonial,
  TextoTestimonial,
  Avatar,
  ContainerAvatar,
  Profile
} from '../../elements/testimonials/index';

const Testimonials = () => {
  return (
    <div>
        <SubTitle>
            Testimonials
            <hr />
        </SubTitle>
        <ContainerTestimonials>
          <Testimonial>
            <TextoTestimonial>
             <span>''</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est doloribus nesciunt fugiat quo rerum.
            </TextoTestimonial>
          </Testimonial>
          <DiseñoTestimonial />
          <ContainerAvatar>
            <Avatar />
            <Profile>
              <h2>Jhon Snow</h2>
              <p>developer</p>
            </Profile>
          </ContainerAvatar>
        </ContainerTestimonials>
    </div>
  )
}

export default Testimonials