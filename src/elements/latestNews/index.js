import styled from 'styled-components'

const ContainerNews = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 70px 1fr;
    margin-bottom: 10px;
`;

const Callendar = styled.div`
    width: 49px;
    height: 51px;
    border-radius: 3px;

    div:nth-child(1){
        width: 49px;
        height: 17px;
        border-radius: 3px;
        background-image: linear-gradient(0deg, #e84e4e 0%, #ff7e7e 100%);
        font-size: 13px;
        line-height: 20px;
        color: #ffffff;
        font-weight: 700;
        font-family: "Ubuntu";
        text-align: center; 
        text-transform: uppercase;
    }

    div:nth-child(2){
        width: 49px;
        height: 34px;
        border-radius: 3px;
        background-image: linear-gradient(0deg, #f9f9f9 0%, #ffffff 100%);
        border: 1px solid #e5e5e5;
        font-size: 24px;
        line-height: 20px;
        color: #191919;
        font-weight: 700;
        font-family: "Ubuntu";
        text-align: center;
        padding-top: 5px;
    }
`;

const ContainerDescNews = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;

    div:nth-child(1){
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 10px; */

        p:nth-child(1){
            width: 270px;
            height: 24px;
            font-size: 14px;
            line-height: 20px;
            color: #191919;
            font-weight: 700;
            font-family: "Ubuntu";
        }

        div{            
            width: 10%;
            font-size: 12px;
            color: #ababab;
            font-weight: 400;
            font-family: "Ubuntu";

            svg{
                width: 20%;
                fill: #d7d7d7;
            }  
        }
    }

    div:nth-child(2){
        width: 500px;
        height: 58px;
        font-size: 14px;
        line-height: 20px;
        color: #6f6f6f;
        font-weight: 400;
        font-family: "Ubuntu";
        margin-top: -15px;
    }
`;

const Hr = styled.hr`
    width: 550px;
    border: 1px dashed;
    height: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #ababab;
`;


export{
    ContainerNews,
    Callendar,
    ContainerDescNews,
    Hr
}