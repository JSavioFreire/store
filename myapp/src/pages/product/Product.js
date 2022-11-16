import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

import { ImageProduct,ProductAll,TitleProduct,DescProduct,Flex,PriceProduct } from "./StyleProduct.js"
import { BtBuy } from "../../components/products/styleProduct"

const Product = () => {
  const { id } = useParams()
  const url = 'https://fakestoreapi.com/products/' + id

  const {data, error, loading} = useFetch(url)

  return (
      <ProductAll>
        {error && <h1>ocorreu um erro</h1>}
        {loading && <h1>carregando...</h1>}
        <ImageProduct src={data.image}/>
        <div>
          <TitleProduct>{data.title}</TitleProduct>
          <DescProduct>{data.description}</DescProduct>
          <Flex>
            <PriceProduct> R$ {data.price}</PriceProduct>
            <BtBuy>Compre Agora</BtBuy>
          </Flex>
        </div>
      </ProductAll>
  )
}

export default Product