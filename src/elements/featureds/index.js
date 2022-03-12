import styled from 'styled-components'
import theme from '../../theme'

const ContainerFeatureds = styled.div`
    width: 100%;
    background-color: ${theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

const GridFeatureds = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

const ContentFeatured = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;

    h2{
        font-size: 21px;
        line-height: 20px;
        font-weight: 500;
        font-family: 'Ubuntu';
        text-align: center;
        color: ${theme.letterNavigation};
        margin-bottom: 15px;
    }

    p{
        font-size: 14px;
        line-height: 20px;
        color: #6f6f6f6f;
        font-weight: 400;
        font-family: 'Ubuntu';
        text-align: center;

        span{
            color: ${theme.red};
        }
    }
`;

const Ellipse = styled.div`
    width: 59px;
    height: 59px;
    background-image: linear-gradient(0deg, #c22a2a 0%, #ff8b8b 100%);
    border-radius: 0 50% 50% 50%;
    transform: rotate(225deg);
    margin-bottom: 20px;
    box-shadow: -3px -2px 5px 2px rgba(0,0,0,0.5);

    svg{
        width: 80%;
        padding-bottom: 8px;
        padding-right: 5px;
        height: auto;
        margin-top: 2px;
        fill: ${theme.white};
        transform: rotate(135deg);
    }
`;

export {
    ContainerFeatureds,
    GridFeatureds,
    Ellipse,
    ContentFeatured
}