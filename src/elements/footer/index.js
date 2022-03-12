import styled from 'styled-components'
import theme from '../../theme'

//Footer
const ContainerFooter = styled.div`
    width: 100%;
    min-height: 378px;
    background-color: ${theme.black};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterC = styled.div`
    margin-top: 40px;
    width: 80%;
`;

const GridFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;


const ReserveRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 49px;
    background-color: #272727;

    font-size: 12px;
    line-height: 20px;
    color: #7d7d7d;
    font-weight: 400;
    font-family: "Ubuntu";
    
`;

const Container = styled.div`
    width: 100%;
    margin-bottom: 100px;
`;


//----------------------    RECENT POSTS --------------------------------

const Posts = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 30px;

    div:nth-child(1){
        min-width: 48px;
        height: 48px;
        background-color: #c8c8c8;
        border: 2px solid #4b4b4b;
        margin-right: 10px;
    }

    div:nth-child(2){
        width: 250px;
        height: 38px;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        font-weight: 400;
        font-family: "Ubuntu";

        p{
            font-size: 12px;
            line-height: 20px;
            color: #888888;
            font-weight: 400;
            font-family: "Ubuntu";
        }
    }
`;

//----------------------    CONTACT FORM --------------------------------

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button{
        justify-content: flex-end;
        margin-top: 10px;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 72px;
    background-color: #414141;
    border: 1px solid #4b4b4b;
    padding-top: 5px;
    padding-left: 5px;
`;

//----------------------    TWITTER WIDGET --------------------------------

const Twits = styled.div`
    width: 100%;
    display: flex;
    height: 100px;

    div:nth-child(1){
        width: 10%;
        height: auto;

        svg{
            width: 90%;
            fill: ${theme.iconColor};
        }
    }

    div:nth-child(2){
        width: 270px;
        height: 72px;
        font-size: 14px;
        line-height: 20px;
        color: #888888;
        font-weight: 400;
        font-family: "Ubuntu";
        margin-left: 2px;
        p:nth-child(1){
            color: ${theme.white};
        }

        span{
            color: ${theme.white};
        }
    }
`;

//----------------------    FLICKER WIDGET --------------------------------

const GridFlicker = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;

    div{
        width: 60px;
        height: 60px;
        background-color: #c8c8c8;
        border: 2px solid #4b4b4b;
        margin-bottom: 10px;
    }
`;


export{
    ContainerFooter,
    FooterC,
    ReserveRight,
    GridFooter,
    Container,
    Posts,
    TextArea,
    FormContainer,
    Twits,
    GridFlicker
}