import { HeaderAll,Logo,InputSeach,RightHeader,User,Icon,MyC,Cart } from "./styledHeader"
import { Eighty } from "../../provider/styleGlobal/styleGlobal"
import {RiUserLine} from 'react-icons/ri'
import {BsCart2} from 'react-icons/bs'

export default function Header(){
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
                    <Cart>
                        <Icon>
                            <BsCart2/>
                        </Icon>
                        <MyC>
                            Meu Carrinho
                        </MyC>
                    </Cart>
                </RightHeader>
            </Eighty>
        </HeaderAll>
    )
}