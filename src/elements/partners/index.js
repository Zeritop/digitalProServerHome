import styled from 'styled-components'
import theme from '../../theme'

const ContainerPartners = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 120px;
    background-color: #fcfcfc;
    display: flex;
    justify-content: center;
    border-top: 1px solid #c9c9c9;
`;

const PartnersC = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const TextP = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 3px solid ${theme.red};

    h2{
        font-size: 18px;
        line-height: 20px;
        color: #191919;
        font-weight: 500;
        font-family: "Ubuntu";
        text-transform: uppercase;
    }

    p{
        width: 224px;
        height: 30px;
        font-size: 14px;
        line-height: 20px;
        color: #6f6f6f;
        font-weight: 400;
        font-family: "Ubuntu";
    }
`;

const ImagesP = styled.div`
    img{
        width: 90%;
        filter: grayscale(100%) opacity(.5);
        cursor: pointer;

        &:hover{
            filter: grayscale(0%) opacity(1);
        }
    }
`;

export{
    ContainerPartners,
    PartnersC,
    TextP,
    ImagesP
}