import styled from "styled-components";



export const Wrapper = styled.div`
    background: url(/images/footer-bg.jpg);
    background-attachment: fixed;
    background-position: center;
    backround-repeat: no-repeat;

    padding: 8rem;

`;


export const Title = styled.h3`
    font-size: 3rem;
    color: var(--white);
    padding: 2rem 0;
    text-transform: capitalize;
`;

export const Link = styled.a`
    font-size: 1.7rem;
    margin-bottom: 2rem;
    margin-right: .5rem;
    color: var(--white);
    display: flex;
    align-items: center;


    :hover{
        color: var(--orange);
    }
`;


export const Item = styled.div`
    display:flex;
    flex-direction: column;

    &:nth-child(3){
        flex-direction: row;
    }
`;


export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap: 2rem;
`;



export const Column = styled.div`
    padding: 2rem;

    &:nth-child(3){
        ${Item}{
            display: flex;
            flex-direction: row;

            ${Link}{
                font-size: 3rem;
            }
        }
    }

`;



export const Input = styled.input`
    padding: 1rem 2rem;
    max-width: 60rem;
    width: 100%;
    font-size: 1.5rem;
    display: block;
`;

export const Form = styled.div`
    display: block;
`;

export const Text = styled.div`
    padding: .1rem;

`;


export const Icon = styled.i`
    margin-right: 1rem;
    color: var(--white);

    :hover{
        color: var(--orange);
    }

`;














