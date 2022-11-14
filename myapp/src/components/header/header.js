import { HeaderAll,Logo,InputSeach,RightHeader,User,Icon,MyC,Cart,CartOpen,TitleCart,ItensCarts,Emptys,BtPay,Flex,Exit,Total,FlexBottom,Strong,Div } from "./styledHeader"
import { Eighty } from "../../styleGlobal/styleGlobal"
import {RiUserLine} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import { useEffect, useState } from "react"
import MenuMobile from "../menuMobile/MenuMobile"
import EachItemCart from "./EachItemCart"

export default function Header({itensCart}){

    const [cartOpening, setCartOpening] = useState(false)
    const [empty, setEmpty] = useState(true)
    const lengthCart = itensCart.length

    let [total] = useState(0)
    let [totalFixed] = useState(0)

    itensCart.forEach((el,index) => {
        total += itensCart[index].price
        totalFixed = total.toFixed(2)
    });

    useEffect(()=>{
        if(lengthCart === 0){
            setEmpty(true)
        }
        else{
            setEmpty(false)
        }
    },[itensCart])

    return(
        <HeaderAll>
            <Eighty>
                <MenuMobile/>
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
                    <Cart onClick={()=>{setCartOpening(true)
}}>
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
                <Exit onClick={()=>{setCartOpening(false)}}><AiFillCloseCircle/></Exit>
                <TitleCart>Meu Carrinho</TitleCart>
                <ItensCarts>
                    {empty ?
                        <Emptys>O meu carrinho está vazio :(</Emptys>
                    :
                    <Flex>
                        {itensCart.map((product)=>( 
                            <EachItemCart key={product.id} img={product.image} title={product.title} price={product.price}/>
                                ))}
                        <FlexBottom>
                            <Div>
                            <Total>Total:</Total>
                            <Strong>R${totalFixed}</Strong>
                            </Div>
                            <BtPay>Finalizar Compra</BtPay>
                        </FlexBottom>
                    </Flex>}
                </ItensCarts>
            </CartOpen>)}
        </HeaderAll>
    )
}