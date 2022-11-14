import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root{
        --colorBlue: #56B2E8;
        --colorCompLight: #5292FF;
        --colorCompDark: #4E60F5;
        --colorDarkGray: #222222;
        --colorLightGray: #2B2B2B;
        --colorWhite: #fafafa;
    }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: var(--colorLightGray) ;
  }
  .opening{
    right: 0;
  }
`;

export const Eighty = styled.div`
    width: 80%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 700px){
      width: 100%;
    }
`