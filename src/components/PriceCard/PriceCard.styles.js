import styled from "styled-components";


export const Wrapper = styled.div`
    background: #1d0e15;
    border: var(--border);
    padding: 2rem;
    text-align: center;



`;

export const BoxHeader = styled.div`
    color: var(--white);
    padding: 2rem 0;
    text-align: center;
    h3{
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 1rem;

    }
    .amount{
        font-size: 6rem;
        text-align: center;


        span{
            font-size: 2rem;
        }
    }
`;

export const BoxDetail = styled.div`
    list-style-type: none;
    list-style: none;

    li{
        color: var(--white);
        margin: 2rem 0;
        font-size: 2rem;

        i{
            margin-right: 1rem;
            &.fa-times{
                color: var(--orange);
            }
        }
    }
`;
