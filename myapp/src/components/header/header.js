import { HeaderAll,Logo,InputSeach,RightHeader,User,Icon,MyC,Cart,CartOpen,TitleCart,ItensCarts } from "./styledHeader"
import { Eighty } from "../../styleGlobal/styleGlobal"
import {RiUserLine} from 'react-icons/ri'
import {BsCart2} from 'react-icons/bs'
import { useState } from "react"
import EachItemCart from "./EachItemCart"

export default function Header({itensCart}){

    const [cartOpening, setCartOpening] = useState(false)

    const OpenCart = ()=>{
        console.log(itensCart)
        setCartOpening(true)
    }


    return(
        <HeaderAll>
            <Eighty>
                <Logo>Logo</Logo>
                <InputSeach placeholder="O que você está procurando?"/>
                <RightHeader>
                    <User>
                        <Icon>
                            <RiUserLine/>
                        </Icon>
                        <MyC>
                            Minha Conta
                        </MyC>
                    </User>
                    <Cart onClick={OpenCart}>
                        <Icon>
                            <BsCart2/>
                        </Icon>
                        <MyC>
                            Meu Carrinho
                        </MyC>
                    </Cart>
                </RightHeader>
            </Eighty>
            {cartOpening && (
            <CartOpen>
                <TitleCart>Meu Carrinho</TitleCart>
                <ItensCarts>
                    {itensCart.map((product)=>(
                        <EachItemCart img={product.image} title={product.title} price={product.price}/>
                    ))}
                </ItensCarts>
            </CartOpen>)}
        </HeaderAll>
    )
}