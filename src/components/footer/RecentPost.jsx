import React from 'react'
//Elements
import { Container, Posts } from '../../elements/footer/index';

const RecentPost = () => {

    const posts = [
        {
            title:'Lorem ipsum, dolor sit amet consectetur',
            date: 'june 30, 2013'
        },
        {
            title:'adipisicing elit. Nihil, voluptatem!',
            date: 'May 12, 2013'
        }
    ]
    
  return (
    <Container>
        {
            posts.map( (p, index) => (
                <Posts key={index}>
                    <div></div>
                    <div>
                        { p.title } 
                        <p> { p.date } </p>
                    </div>
                </Posts> 
            ))
        }
    </Container>
  )
}

export default RecentPost