import { AllProduct,Title } from "./styleProduct"
import EachProduct from "./eachProduct/eachProduct"

import {useFetch} from '../../hooks/useFetch'

const url = 'https://fakestoreapi.com/products'

const Product = ({addCart}) => {
    const { data } = useFetch(url);
return (
    <>
        <Title>Todos os nossos Produtos</Title>
        <AllProduct>
            {data && data.map((products) =>(
                <EachProduct key={ products.id } id={products.id} name={products.title} img={products.image} price={products.price} addCart={addCart} products={products}/>

            ))}
           
        </AllProduct>
    </>
  )
}

export default Product