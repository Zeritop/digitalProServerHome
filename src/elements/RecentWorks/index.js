import styled from 'styled-components'
import theme from '../../theme'

const ContainerRecent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

const HeaderRecent = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

const ButtonsContainer = styled.div`
    button{
        width: 23px;
        height: 23px;
        border-radius: 11px;
        border: 1px solid transparent;
        background-image: linear-gradient(0deg, #f2f2f2 0%, #ffffff 100%);
        cursor: pointer;
        margin-left: 5px;

        svg{
            width: 50%;
            height: auto;
        }

        &:hover{
            background-image: linear-gradient(0deg, #f25151 0%, #ff5e5e 100%);

            svg{
                fill: ${theme.white};
            }
        }
    }
`;

const ContentRecent = styled.div`
    width: 80%;
`;

const GridRecent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const CardRecent = styled.div`
    width: 290px;
    height: 170px;
    filter: drop-shadow(0px 1px 0.5px rgba(0,0,0,0.25));
    background-color: #c8c8c8;
    border: 5px solid #fafafa;
    

    &:hover{
        background-color: #dddddd;
        div{
            button{
                opacity: 1;
            }
        }
    }
`;

const ButtonCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: #6f6f6f;
        border: 1px solid transparent;
        opacity: 0;
        margin-left: 4px;
        cursor: pointer;

        svg{
            width: 50%;
            height: auto;
            fill: ${theme.white};
        }

        &:hover{
            background-color: ${theme.red};
        }
    }
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardDescription = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    span{
        font-size: 12px;
        line-height: 20px;
        color: #ababab;
        font-weight: 400;
        font-family: "Ubuntu";
    }
`;

const CardDescHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;

    div{
        svg{
            width: 35%;
            fill: #d7d7d7;
        }
    
        width: 10%;
        font-size: 12px;
        color: #ababab;
        font-weight: 400;
        font-family: "Ubuntu";
    }

    p{
        height: 24px;
        font-size: 14px;
        line-height: 20px;
        color: #191919;
        font-weight: 700;
        font-family: "Ubuntu";  
    }

`;


export {
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
}