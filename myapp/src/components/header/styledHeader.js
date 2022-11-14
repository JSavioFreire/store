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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    text-shadow: 0 0 7px var(--colorBlue);
    color: var(--colorWhite);
    color: white;
    font-family: 'Teko', sans-serif;
    font-weight: 700;
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
    @media screen and (max-width: 700px){
      width: 90%;
      margin-left: 10px;
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
    @media screen and (max-width: 700px){
        display: none;
    }
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
    @media screen and (max-width: 700px){
        display: none;
    }
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
    min-height: 400px;
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
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const EachImg = styled.img`
    width: 20%;
    height: 50px;
`
export const EachDiv = styled.div`
    width: 60%;
    height: 80px;
    `
export const EachDivTitle =styled.p`
    width: 100%;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: clip; 
`
export const EachDivPrice =styled.p`
    
`
export const Emptys = styled.h2`
    font-size: 15px;
    color: gray;
    text-align: center;
    margin-top: 30px ;
`
export const BtPay = styled.button`
    width: 100px;
    height: 50px;
    background-color: var(--colorBlue);
    color: var(--colorWhite);
    border: 0;
    border-radius: 10px;
    box-shadow: 0 0 10px var(--colorBlue);
    transition: .2s;
    cursor: pointer;
    :hover{
        background-color: #5292FF;
        box-shadow: 0 0 10px #5292FF;

    }
`
export const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`
export const Exit = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    font-size: 50px;
    cursor: pointer;
    color: red;
`
export const Total = styled.div`
    margin-top: 20px;
`
export const FlexBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`
export const Strong = styled.p`
    font-size: 22px;
    margin-top: -5px;
`
export const Div = styled.div`
`
export const MenuMobile = styled.div`
    font-size: 45px;
    margin-top: 10px;  
    display: none;
    @media screen and (max-width:700px){
        display: block;
    }
`
export const MenuOpen = styled.div`
    width: 60%;
    position: fixed;
    background-color: var(--colorLightGray);
    top: 0;
    right: -80%;
    height: 100vh;
    z-index: 5;
    display: none;
    transition: .4s;

    @media screen and (max-width:700px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const UserMobile = styled.div`
    font-size: 50px;
`
