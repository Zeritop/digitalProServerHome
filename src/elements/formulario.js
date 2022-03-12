import styled from 'styled-components'
import theme from '../theme'

const Input = styled.input`
    width: 100%;
    height: 32px;
    background-color: #414141;
    border: 1px solid #4b4b4b;
    margin-bottom: 10px;
    padding-left: 5px;
`;

const Button = styled.button`
    width: 72px;
    height: 32px;
    background-color: ${theme.red};
    border: none;
    color: ${theme.white};
    cursor: pointer;
`;

export{
    Input,
    Button
}