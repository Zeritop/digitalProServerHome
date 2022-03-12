import React from 'react'
//Elemenst
import { Container, TextArea, FormContainer } from '../../elements/footer/index';
import { Input, Button } from '../../elements/formulario';

const ContactForm = () => {
  return (
    <Container>
        <FormContainer>
            <Input 
                placeholder='Your Name*'
            />
            <Input 
                placeholder='Your Email*'
            />
            <TextArea
                placeholder='Your Message*'
            ></TextArea>
            <Button>SEND</Button>
        </FormContainer>
    </Container>
  )
}

export default ContactForm