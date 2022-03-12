import React from 'react'
//Elements
import { ContainerFooter, FooterC, ReserveRight, GridFooter } from '../../elements/footer/index';
import { SubTitle } from '../../elements/subTitle';
//Components
import RecentPost from './RecentPost';
import ContactForm from './ContactForm';
import TwitterWidget from './TwitterWidget';
import FlickrWidget from './FlickrWidget';

const Footer = () => {
  return (
    <ContainerFooter>
        <FooterC>
            <GridFooter>
                <div>
                    <SubTitle footer>
                        Recent Posts widget
                        <hr />
                    </SubTitle>
                    <RecentPost />
                </div>
                <div>
                    <SubTitle footer>
                        Contact Form
                        <hr />
                    </SubTitle>
                    <ContactForm />
                </div>
                <div>
                    <SubTitle footer>
                        Twitter widget
                        <hr />
                    </SubTitle>
                    <TwitterWidget />
                </div>
                <div>
                    <SubTitle footer>
                        Flicker widget
                        <hr />
                    </SubTitle>
                    <FlickrWidget />
                </div>
            </GridFooter>
        </FooterC>
        <ReserveRight>
        Norma &copy; 2013 All Rights Reserved
        </ReserveRight>
    </ContainerFooter>
  )
}

export default Footer