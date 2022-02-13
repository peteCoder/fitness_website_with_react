import styled from "styled-components";


export const Wrapper = styled.div`
    background: url(${({background}) => background});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    padding: 8rem 0;
    
`;


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    gap: 2rem;
`;

export const Box = styled.div`
    text-align: center;

    span{
        color: var(--orange);
        font-size: 5rem;
    }

    h3{
        color: var(--white);
        font-size: 2rem;
        text-transform: capitalize;
    }

`;




















