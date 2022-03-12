import styled from 'styled-components'

const ContainerAU = styled.div`
    width: 100%;
`;

const Acordeon = styled.div`
    margin-left: 5px;
    width: 270px;
    padding-top: 13px;
    height: ${props => props.activo ? '119px' : '50px'};
    background-image: ${props => !props.activo ? 'linear-gradient(0deg, #f2f2f2 0%, #ffffff 100%)' : ''};
    border: ${props => props.activo ? '1px solid #e5e5e5' : '1px solid transparent'} ;
    filter: ${props => props.activo ? 'drop-shadow(0px 1px 0.5px rgba(0,0,0,0.05))' : '' };
    background-color: ${props => props.activo ? '#ffffff' : ''};
    margin-bottom: 2px;
    
    div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
        padding-left: 10px;
        text-transform: uppercase;
        font-weight: 700;
        color: ${props => props.activo ? '#ff5555' : ''} ;
    }

    div:nth-child(2){
        width: 250px;
        height: 56px;
        font-size: 14px;
        line-height: 20px;
        color: #6f6f6f;
        font-weight: 400;
        font-family: "Ubuntu";
        padding-left: 10px;
        padding-top: 10px;
        padding-bottom: 5px;
    }

    button{
        width: 22px;
        height: 22px;
        border-radius: 11px;
        background-image: linear-gradient(0deg, #ffffff 0%, #e3e3e3 100%);
        border: none;
        cursor: pointer;
        color: ${props => props.activo ? '#ff5555' : ''};

        font-size: 20px;
        font-weight: 700;
    }
`;

export{
    ContainerAU,
    Acordeon
}