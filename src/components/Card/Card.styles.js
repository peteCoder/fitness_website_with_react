import styled from "styled-components";

export const Wrapper = styled.div`
    overflow: hidden;
    border: .1rem solid rgba(255, 255, 255, .2);
    position: relative;

    :hover{
        img{
            transform: scale(1.1)
        }
    }
`;





export const Image = styled.div`
    width: 100%;
    overflow: hidden;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`;



export const Content = styled.div`
    padding: 3rem;
`;
export const Icons = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 1rem .5rem;
    border-bottom: .1rem solid rgba(255, 255, 255, .2);

    span{
        color: var(--white);
        font-size: 1.6rem;

        i{
            margin-right: .5rem;
            color: var(--orange);
        }
    }

    &.special{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 2rem !important;
        border-bottom: none !important;
        border-top: .1rem solid rgba(255, 255, 255, .2) !important;

    
    }

`;


export const Title = styled.h3`
    font-size: 2.5rem;
    margin-top: 2.8rem;
    
    text-transform: capitalize;
    color: var(--white);

    &.special{
        margin-bottom: 6rem;

        &:hover{
            color: var(--orange);
            cursor: pointer;
        }
    }

`;






















































