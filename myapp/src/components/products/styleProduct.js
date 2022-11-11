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
    width: 300px;
    height: 380px;
    background-color: white;
    box-shadow: 0 0 5px var(--colorCompLight);
    border-radius: 10px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const EachProdImg = styled.img`
    width: 80%;
    height: 230px;
    background-color: blue;
`
export const AboutProduct = styled.div`
    width: 90%;
    text-align: center;
`
export const TitleProduct = styled.h3`
    font-size: 16px;
    font-weight: 500;
`
export const PriceProduct = styled.h3`
    font-size: 26px;
    margin: 0;

`