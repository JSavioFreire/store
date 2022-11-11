import { AllProduct,Title } from "./styleProduct"
import EachProduct from "./eachProduct/eachProduct"

import {useFetch} from '../../hooks/useFetch'

const url = 'https://fakestoreapi.com/products'

const Product = () => {
    const { data } = useFetch(url);

return (
    <>
        <Title>Todos os nossos Produtos</Title>
        <AllProduct>
            {data && data.map((products) =>(
                
                <EachProduct key={ products.id } name={products.title} img={products.image} price={products.price} />

            ))}
           
        </AllProduct>
    </>
  )
}

export default Product