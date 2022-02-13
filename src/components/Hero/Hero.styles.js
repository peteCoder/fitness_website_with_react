import styled from "styled-components";


export const Section = styled.section`
    background-image: url(${({background}) => background}); // url(/images/home-bg.jpg) will be passed in
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding-top: 8.9rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 5rem;


    span{
        color: var(--orange);
        font-size: 3rem;
    }

    h3{
        color: var(--white);
        font-size: 4.3rem;
        text-transform: capitalize;
    }

    p{
        font-size: 1.5rem;
        color: #ccc;
        line-height: 2;
        text-align: left;
        margin-top: 0; 
        margin-bottom: 1rem;
        
    }

    ul{
        font-size: 1.5rem;
        color: var(--white);
        list-style: none;
        list-style-type: none;

        @media (max-width: 764px){
            text-align: center;
        }

        li{
            margin: o.7rem 0;
            text-align: left;

            

            i{
                color:var(--orange);
                margin-right: 1rem;
            }
        }

        

    }

`;




















