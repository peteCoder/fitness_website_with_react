import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: Poppins;
        src: url(../Poppins/Poppins-Regular.ttf);
    }

    :root{
        --orange: #ff5421;
        --white: #fff;
        --black: #000;
        --light-color: #ccc;
        --bg-color: #1d0e15;
        --border: .1rem solid rgba(255,255,255,.2);
    }
    html{
        scroll-behaviour: smooth;
        scroll-padding-top: 8rem;
        font-size: 62.5%;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 1rem;
        }

        &::-webkit-scrollbar-thumb {
            background: #ff5421;
        }

        &::-webkit-scrollbar-track {
            background: #1d0e15;
        }

        @media (max-width: 991px){
            font-size: 55%;
        }


        @media (max-width: 450px) {
            font-size: 40%;
            
          }
          
          @media (max-width: 250px) {
            font-size: 20%;
            
          }

    }
    

    * {
        font-family: Poppins, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none !important;
        transition: all .2s linear;
    }

    body{
        background: #1d0e15;
    }

`;
























