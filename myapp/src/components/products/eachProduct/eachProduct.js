import { useEffect, useState } from "react"
import { EachProd,EachProdImg,AboutProduct,TitleProduct,PriceProduct,SplitProduct,Val,BtAddCart,BtBuy,Bt } from "../styleProduct"
import {BsCart2} from 'react-icons/bs'
import { Link } from "react-router-dom"

const EachProduct = ({ price, img, name, addCart, products}) => {
  const [split, setSplit] = useState()
  const [value, setValue] = useState()
  const [valueFixed, setValueFixed] = useState()
  const [priceFixed, setPriceFixed] = useState()

  useEffect(()=>{
    if(price > 1000){
      setSplit(12)
    }
    else if(price > 500){
      setSplit(6)
    }
    else if(price > 400){
      setSplit(5)
    }
    else if(price > 300){
      setSplit(4)
    }
    else if(price > 200){
      setSplit(3)
    }
    else if(price > 100){
      setSplit(2)
    }
    setValue(price/split)
  value && setValueFixed(value.toFixed(2))
  price && setPriceFixed(price.toFixed(2))
  },[value])
  
  return (
    <EachProd>
        <EachProdImg src={img} />
        <AboutProduct> 
            <PriceProduct>R$ {priceFixed}</PriceProduct>
            {split > 1 && <SplitProduct>{split}x <Val>{valueFixed}</Val> sem juros</SplitProduct>}
            <TitleProduct>{name}</TitleProduct>
            
        </AboutProduct>
        <Bt>
              <BtAddCart onClick={()=>{addCart(products)}}><BsCart2/></BtAddCart>
              <Link style={{ textDecoration: 'none' }} to={`/product/${products.id}`}>
                <BtBuy>Mais Detalhes</BtBuy>
              </Link>
            </Bt>
    </EachProd>
  )
}

export default EachProduct