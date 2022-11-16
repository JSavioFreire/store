import styled from "styled-components";

export const MenuAll = styled.div`
    width: 100%;
    height: 50px;
    background-color: var(--colorDarkGray);
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 700px){
        display: none;
    }
`
export const EachMenu = styled.div`
    font-size: 20px;
    color: var(--colorWhite);
    cursor: pointer;
    transition: 0.1s;
    :hover{
        color: var(--colorCompLight);
    }
`