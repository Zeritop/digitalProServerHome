import React, { useState } from 'react'
//Elements
import { SubTitle } from '../../elements/subTitle';
import { ContainerAU, Acordeon } from '../../elements/aboutUs/index';

const AboutUs = () => {

    const useActivar = (activar = false) => {
        const [activo, setActivo] = useState(activar)
        return{
            activo,
            setActivo
        }
    }

    const who = useActivar(true)
    const what = useActivar()
    const why = useActivar()
    
    const aboutUs = [
        {
            id: 'who',
            title: 'who we are',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, autem?',
            activo: () => who.activo
        },
        {
            id: 'what',
            title: 'what we do',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, autem?',
            activo: () => what.activo
        },
        {
            id: 'why',
            title: 'why choose us',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, autem?',
            activo: () => why.activo
        }
    ]

    const handleToggleActivar = (id) => {
        switch(id){
            case 'who':
                return who.setActivo(!who.activo);
            case 'what':
                return what.setActivo(!what.activo);
            case 'why':
                return why.setActivo(!why.activo);       
            default:
                break;    
        }
    }

  return (
    <div>
        <SubTitle>
            About Us
            <hr />
        </SubTitle>
        <ContainerAU>
            {
                aboutUs.map((aU, index) => (
                    <Acordeon key={index} activo={aU.activo()}>
                        <div>
                            { aU.title }
                            <button
                                onClick={() => handleToggleActivar(aU.id)}
                            >
                                { aU.activo() ? '-' : '+' } 
                            </button>
                        </div>
                        {
                           aU.activo() && <div>
                               { aU.description }
                           </div>
                        }
                    </Acordeon>
                ))
            }
            
        </ContainerAU>
    </div>
  )
}

export default AboutUs