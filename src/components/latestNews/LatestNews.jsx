import React, { Fragment } from 'react'
//Elements
import { SubTitle } from '../../elements/subTitle';
import { ContainerNews, Callendar, ContainerDescNews, Hr } from '../../elements/latestNews/index';
//Images
import { ReactComponent as Comment } from '../../Images/comment.svg';

const LatestNews = () => {

  const latestNews = [
    {
      title: 'Lorem impsum dolor sit amet',
      comments: 27,
      dia: 27,
      mes: 'jun',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus dicta odit, dolor distinctio nihil sit quo quod officia, voluptate quibusdam eius nemo magni suscipit inventore dolorum quasi, modi tenetur.'
    },
    {
      title: 'Consectetur adipisicing elit',
      comments: 118,
      dia: 14,
      mes: 'jun',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus dicta odit, dolor distinctio nihil sit quo quod officia, voluptate quibusdam eius nemo magni suscipit inventore dolorum quasi, modi tenetur.'
    }
  ]

  return (
    <div>
        <SubTitle>
            Latest News
            <hr />
        </SubTitle>
        {
          latestNews.map((lt, index) => (
            <Fragment key={index}>
              <ContainerNews >
                <div>
                <Callendar>
                  <div>{ lt.mes }</div>
                  <div> { lt.dia } </div>
                </Callendar>
                </div>
                <div>
                  <ContainerDescNews>
                    <div>
                      <p> { lt.title } </p>
                      <div> <Comment /> { lt.comments } </div>
                    </div>
                    <div>{ lt.description }</div>
                  </ContainerDescNews>
                </div>
              </ContainerNews>
              {
                (latestNews.length - 1) !== index && <Hr />
              }
            </Fragment>
          ))
        }
    </div>

  )
}

export default LatestNews