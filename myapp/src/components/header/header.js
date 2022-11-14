import { HeaderAll,Logo,InputSeach,RightHeader,User,Icon,MyC,Cart,CartOpen,TitleCart,ItensCarts,Emptys,BtPay,Flex,Exit } from "./styledHeader"
import { Eighty } from "../../styleGlobal/styleGlobal"
import {RiUserLine} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import { useEffect, useState } from "react"
import EachItemCart from "./EachItemCart"

export default function Header({itensCart}){

    const [cartOpening, setCartOpening] = useState(false)
    const [empty, setEmpty] = useState(true)
    const lengthCart = itensCart.length

    

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
                        <BtPay>Pagar Agora</BtPay>
                    </Flex>}
                </ItensCarts>
            </CartOpen>)}
        </HeaderAll>
    )
}