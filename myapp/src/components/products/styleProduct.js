import styled from "styled-components";

export const AllProduct = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
`
export const Title = styled.div`
    width: 100%;
    font-size: 25px;
    margin: 30px 0;
    font-weight: 500;
    background-color: var(--colorDarkGray);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--colorWhite);

`
export const EachProd = styled.div`
    width: 200px;
    height: 420px;
    background-color: white;
    box-shadow: 0 0 5px var(--colorCompLight);
    border-radius: 10px;
    margin: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    @media screen and (max-width: 700px){
        width: 80%;
    }
`
export const EachProdImg = styled.img`
    width: 80%;
    height: 40%;
    background-color: blue;
`
export const AboutProduct = styled.div`
    width: 90%;
    height: 35%;
    margin-top: 20px;
    color: var( --colorLightGray);
`
export const TitleProduct = styled.h3`
    font-size: 14px;
    font-weight: 500;
`
export const PriceProduct = styled.h3`
    font-size: 26px;
    margin: 0;
`
export const SplitProduct = styled.p`
    font-size: 14px;
    margin: 0;
`
export const Val = styled.span`
    font-size: 19px;
    color: #00A650;
    font-weight: 600;
`
export const Bt = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-evenly;    
    align-items: center;
`
export const BtAddCart = styled.div`
    color: var(--colorBlue);
    font-size: 24px;
    border-radius: 10px;
    padding: 0 5px;
    border: 2px solid var(--colorBlue);
    background-color: var(--colorWhite);
    transition: .2s;
    cursor: pointer;
    text-align: center;
    :hover{
        background-color: var(--colorBlue);
        box-shadow: 0 0 15px var(--colorBlue);
        color: white;
    }
`
export const BtBuy = styled.a`
    font-size: 18px;
    padding: 5px 8px;
    border-radius: 10px;
    background-color: var(--colorBlue);
    box-shadow: 0 0 15px var(--colorBlue);
    color: white;
    border: 2px solid var(--colorBlue);
    transition: .2s;
    text-decoration: none;
    cursor: pointer;
    :hover{
        background-color: var(--colorWhite);
        color: var(--colorBlue);
    }
`