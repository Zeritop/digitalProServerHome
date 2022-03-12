import styled from 'styled-components'

const ContainerLastGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContainerGrid = styled.div`
    width: 80%;
`;

const GridGroup = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const FirstGrid = styled.div`
    grid-column: 1 / span 2;
`;

export {
    ContainerLastGroup,
    GridGroup,
    ContainerGrid,
    FirstGrid
}