import { EachProd,EachProdImg,AboutProduct,TitleProduct,PriceProduct } from "../styleProduct"

const EachProduct = ({price, img, name}) => {
  return (
    <EachProd>
        <EachProdImg src={img} />
        <AboutProduct>
            <TitleProduct>{name}</TitleProduct>
            <PriceProduct>{price}</PriceProduct>

        </AboutProduct>
    </EachProd>
  )
}

export default EachProduct