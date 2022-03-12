import styled from 'styled-components'
import theme from '../../theme'

const NavBarE = styled.nav`
    background-color: ${theme.grayLight};
    display: flex;
    justify-content: center;
`;

const NavBarBody = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

const LeftSideNav = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    color: ${theme.iconColor};
    padding: 5px;

    p{
        padding-left: 15px;
        padding-right: 10px;
        font-weight: 400;
        font-family: 'Entypo', arial;
        width: 55%;
    }

    hr{ 
        border: none;
        border-left: 1px solid ${theme.iconColor};
        height: 100%;
        width: 1px;       
    }

    svg{
        fill: ${theme.iconColor};
        height: 20px;
        width: 10%;
        transform: rotateY(180deg);
    }

`;

const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0px;

    p:nth-child(2n){
        color: ${theme.black};
        padding-right: 5px;
        cursor: pointer;
    }

    p:nth-child(3n){
        color: ${theme.red};
        word-spacing: normal;
        padding-left: 5px;
        cursor: pointer;
    }

    svg{
        fill: ${theme.iconColor};
        height: 50px;
        width: 100%;
        transform: rotateY(180deg);
        margin-left: 20px;
    }
`;

const FormLog = styled.form`
    position: absolute;
    top: 60px;
    left: 470px;
    width: 190px;
    height: auto;
    background-color: #373737;
    display: flex;
    justify-content: center;
    border-top: 3px solid ${theme.red};

    div:nth-child(1){
        position: absolute;
        top: -23px;
        left: ${props => props.log === 'register' ? '100px' : '0px'};
        width: 0;
        height: 0;
        border-right: 10px solid transparent;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 10px solid #ff5555;
    }

    p{
        position: absolute;
        top: -18px;
        color: black;
        left: 160px;
        cursor: pointer;
    }
`;

const ContainerForm = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const RightSideNav = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;

    
    svg{
        height: 30px;
        width: 15%;        
    }

`;

const Span = styled.span`
    background-color: ${props => props.activo === 'active' ? 'white' : 'transparent'};
    height: 100%;
    box-shadow: ${props => props.activo === 'active' ? '0px -2px 5px rgba(0,0,0,.5)' : 'none'} ;
    padding-right: 5px;
    padding-left: 5px;
    margin-left: 5px;

    svg{
        width: 100%;
        margin-top: 15px;
        fill: ${props => props.activo === 'active' ? '#ff5555' : '#c9c9c9'};

        &:hover{
            fill: ${theme.red};
            cursor: pointer;
            filter:drop-shadow(1px 1px 3px #888);
        }
    }
    
`;

const NavbarSearchContainer = styled.div`
    width: 100%;
    background-color: ${theme.white};
    display: flex;
    justify-content: center;
`;

const NavbarSContent = styled.div`
    width: 80%;
    height: 104px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    svg{
        height: 30px;
        width: 35px;
        position: relative;
        transform: rotate(-90deg) scale(.8);
    }

`;

const LogoBrackets = styled.div`
    font-size: 35px;
    font-weight: 500;
    text-transform: uppercase;
    font-family: 'Ubuntu';
`;

const MenuNavegacion = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;
    text-transform: uppercase;
    font-family: 'Ubuntu';
    color: ${theme.letterNavigation};
`;

const SpanNav = styled.span`
    height: 105px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.activo === 'active' ? '3px solid #ff5555' : '3px solid transparent' };
    cursor: pointer;

    p{
        padding-left: 20px;
        padding-right: 20px;
    }
    
    
    div{
        width: 0; 
        height: 0; 
        border-left: 5px solid black;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        transform: rotate(90deg);
        opacity: ${props => {
            if(props.activo === 'active' && !props.home){
                return 1
            }else{
                return 0
            }
        }};
    }


    &:hover{
        border-bottom: 3px solid ${theme.red};

        div{
            opacity: 1;
        }

    }
`;

const MenuDown = styled.ul`
    width: 115px;
    background-color: #ff5555;
    position: absolute;
    top: 164px;

    li{
        list-style: none;
        font-size: 12px;
        line-height: 30px;
        color: #ffffff;
        font-weight: 400;
        font-family: "Ubuntu";
        text-align: center;
        border-bottom: 1px solid ${theme.iconColor};

        &:hover{
            background-color: red;
        }
    }
`;


export {
    NavBarE,
    NavBarBody,
    LeftSideNav,
    RightSideNav,
    LoginDiv,
    NavbarSearchContainer,
    NavbarSContent,
    LogoBrackets,
    MenuNavegacion,
    Span,
    FormLog,
    ContainerForm,
    SpanNav,
    MenuDown 
}