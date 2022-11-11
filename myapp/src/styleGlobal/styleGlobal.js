import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root{
        --colorBlue: #4AF5E5;
        --colorCompLight: #F55A56;
        --colorCompDark: #A84643;
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
`;

export const Eighty = styled.div`
    width: 80%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`