import styled from "styled-components";

export const Inner = styled.header`
    padding: 2rem 1rem;
    z-index: 1030;
    background: #fff;
    

    @media (max-width: 768px){
        padding: 2rem;
    }
`; // Also used Bootstrap's `header fixed-top`


export const Logo = styled.a`
    font-size: 2.5rem;
    font-weight: bolder;
    color: #000;

    :hover{
        color: #000;
    }
`;

export const Span = styled.span`
    color: var(--orange);
`;

export const Container = styled.div``; // Used Bootstrap's `container` class

export const Wrapper = styled.div``;  // Used Bootstrap's `row align-items-center justify-content-between` classes

export const Link = styled.a`

    font-size: 2rem;
    margin-right: 2rem;
    text-transform: uppercase;
    cursor: pointer;
    color: black;

    :hover{
        color: var(--orange);
    }
`;



export const Nav = styled.nav`

    @media (max-width: 768px){
        position: absolute;
        top: 99%;
        left: 0;
        right: 0;
        flex-direction: column;
        width: 100%;
        background: #fff;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

        &.active{
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        ${Link} {
            margin: 2rem 2rem;
            color: #000;

            :hover{
                color: var(--orange);
            }
        }

    }

`;

export const MenuBar = styled.div`
    font-size: 3rem;
    color: #000;
    display: none;
    cursor: pointer;

    &.fa-times{
        transform: rotate(180deg);
    }

    @media (max-width: 768px){
        display: block;
    }
    
`;











