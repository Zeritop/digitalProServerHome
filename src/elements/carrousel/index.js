import styled from 'styled-components'
import theme from '../../theme'

const CarrouselContainer = styled.div`
    display: grid;
    grid-template-columns: 10% 80% 10%;
    width: 100%;
    height: 450px;
    background-color: ${theme.carrousel};
`;

const ContainerArrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Arrow = styled.div`
    border-radius: 50%;
    background-color: ${theme.black};
    height: 49px;
    width: 49px;
    cursor: pointer;
    
    svg{
        display: block;
        width: 30px;
        height: 30px;
        margin: auto;
        padding-top: 15px;
        fill: ${theme.white};
    }

    &:hover{
        background-color: ${theme.white};

        svg{
            fill: ${theme.red};
        }
    }
`;

const ContentCarousel = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Ubuntu';

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 60px;

        h2{
            color: ${theme.red};
            font-size: 48px;
            text-transform: uppercase;
            line-height: 20px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 30px;
        }

        p{
            font-size: 18px;
            line-height: 25px;
            color: ${theme.letterNavigation};
            font-weight: 400;
            text-align: center;
        }

        button{
            width: 124px;
            height: 32px;
            border-radius: 3px;
            background-image: linear-gradient(0deg, #ff5555 0%, #ff9d9d 100%);
            border: 1px solid transparent;
            cursor: pointer;
            margin-top: 20px;
        }
    }
`;

export {
    CarrouselContainer,
    ContainerArrow,
    ContentCarousel,
    Arrow
}