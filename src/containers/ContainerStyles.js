import styled from "styled-components";



export const Section = styled.section`
    padding: 4rem 0;

`;

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap: 2rem;
    padding: 2rem;

    // div:nth-child(2){
    //     background: red;
    // }

`;
export const SubHeading = styled.span`
    text-align: center;
    color: var(--orange);
    display: block;
    width: 100%;
    text-transform: lowercase;
    font-size: 2.64rem;

`;


export const Heading = styled.h3`
    text-align: center;
    color: var(--white);
    width: 100%;
    font-size: 3.08rem !important;
    text-transform: capitalize;
    margin-bottom: 2rem;

`;














