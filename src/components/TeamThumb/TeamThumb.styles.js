import styled from "styled-components";


export const SocialIcons = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.65);
    transform: scale(0);

    

    a{
        font-size: 2.8rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background: var(--orange);
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;

        margin-right: 1rem;

        &:hover{
            background: var(--white);
            color: var(--orange);
        }
    
    }
    

`;


export const Box = styled.div`
    position: relative;
    overflow: hidden;

    &:hover{
        ${SocialIcons}{
            transform: scale(1);
        }
    }
`;



export const Details = styled.div`

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.7);
    padding: 2rem;

    h3{
        color: var(--white);
        font-size: 1.7rem;
        text-transform: capitalize;
    }

    span{
        color: var(--orange);
        font-size: 1.5rem;
    }
`;


export const Image = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;














