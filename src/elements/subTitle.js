import styled from 'styled-components';
import theme from '../theme'

const SubTitle = styled.div`
    font-size: ${props => props.footer ? '14px' : '18px'};
    color: ${props => props.footer ? '#ffffff' : '#191919'};
    line-height: 20px;
    font-weight: 700;
    font-family: 'Ubuntu';
    text-transform: uppercase;
    margin-bottom: 20px;

    hr{
        margin-top: 20px;
        background-color: ${theme.red};
        height: 2px;
        width: 60px;
        border: none;
    }
`;

export {
    SubTitle
}