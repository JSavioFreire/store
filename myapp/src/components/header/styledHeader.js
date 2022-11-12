import styled from "styled-components";

export const HeaderAll = styled.div`
    background-color: var(--colorDarkGray);
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid var(--colorCompLight);
`
export const Logo = styled.div`
    width: 20%;
    height: 70px;
    background-color: var(--colorBlue);
`
export const InputSeach = styled.input`
    width: 50%;
    height: 40px;
    color: var(--colorLightGray);
    border-radius: 15px;
    padding-left: 20px;
    border: 0;
    background-color: var(--colorWhite);
    :focus{
        outline: none;
    }
`
export const RightHeader = styled.div`
    width: 20%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: var(--colorWhite);
    
`
export const User = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: 0.1s;

    :hover{
        color: var(--colorCompLight);
    }
`
export const Cart = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: 0.1s;

    :hover{
        color: var(--colorCompLight);
    }
`
export const Icon = styled.div`
    font-size: 30px;
`
export const MyC = styled.div`
    font-size: 13px;
`
export const CartOpen = styled.div`
    position: absolute;
    width: 300px;
    min-height: 500px;
    z-index: 3;
    right: 80px;
    background-color: var(--colorLightGray);
    top: 100px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--colorWhite);
    flex-direction: column;
`
export const TitleCart = styled.h2`

`
export const ItensCarts = styled.div`
    width: 90%;
    min-height: 400px;
`
export const EachItem = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const EachImg = styled.img`
    width: 30%;
    height: 80px;
`
export const EachDiv = styled.div`
    width: 60%;
    height: 80px;
`