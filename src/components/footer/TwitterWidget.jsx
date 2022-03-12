import React from 'react'
//Elements
import { Container, Twits } from '../../elements/footer/index';
//Images
import { ReactComponent as TwitterImg } from '../../Images/twitter.svg';

const TwitterWidget = () => {

  return (
    <Container>
        <Twits>
            <div>
                <TwitterImg />
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur
                <p>http://adipisicing/elit</p>
                <i>about an hour ago</i> 
            </div>
        </Twits>
        <Twits>
            <div>
                <TwitterImg />
            </div>
            <div>
                @<span>Lorem </span> ipsum dolor sit amet consectetur
                <p>
                <i>about an hour ago</i>     
                </p>
            </div>
        </Twits>
    </Container>
  )
}

export default TwitterWidget