import React from 'react'
//Elements
import { 
    ContainerRecent,
    HeaderRecent,
    ButtonsContainer,
    GridRecent,
    ContentRecent,
    CardRecent, 
    ButtonCard, 
    CardContainer, 
    CardDescription,
    CardDescHeader
} from '../../elements/RecentWorks/index';
import { SubTitle } from '../../elements/subTitle';
//Images
import { ReactComponent as ArrowLeft } from '../../Images/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../Images/arrowRight.svg';
import { ReactComponent as Search } from '../../Images/search.svg';
import { ReactComponent as ChainIcon } from '../../Images/chain-icon.svg';
import { ReactComponent as Comment } from '../../Images/comment.svg';

const RecentWorks = () => {

    const recentWorks = [
        {
            title: 'Lorem impsum dolor sit amet',
            comment: 27,
            date: 'May 17, 2013' 
        },
        {
            title: 'Consectetur adipisicing elit',
            comment: 31,
            date: 'June 5, 2013' 
        },
        {
            title: 'sed do eiusmod tempor incididunt',
            comment: 62,
            date: 'March 23, 2013' 
        },
        {
            title: 'Dolore magna alicua',
            comment: 72,
            date: 'March 19, 2013' 
        },
    ]

  return (
    <ContainerRecent>
        <HeaderRecent>
            <SubTitle>
                Recent Works
                <hr />
            </SubTitle>
            <ButtonsContainer>
                <button>
                    <ArrowLeft />
                </button>
                <button>
                    <ArrowRight />
                </button>
            </ButtonsContainer>
        </HeaderRecent>
        <ContentRecent>
            <GridRecent>
                {
                    recentWorks.map((rW, index) => (
                        <CardContainer key={index}>
                            <CardRecent>
                                <ButtonCard>
                                    <button>
                                        <ChainIcon />
                                    </button>
                                    <button>
                                        <Search />
                                    </button>
                                </ButtonCard>
                            </CardRecent>
                            <CardDescription>
                                <CardDescHeader>
                                    <p> { rW.title } </p>
                                    <div>
                                        <Comment /> { rW.comment }
                                    </div>
                                </CardDescHeader>
                                <span> { rW.date } </span> 
                            </CardDescription>
                        </CardContainer>
                    ))
                }
            </GridRecent>
        </ContentRecent>
    </ContainerRecent>
  )
}

export default RecentWorks