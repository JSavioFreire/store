import Banner from "../../components/banner/banner"
import Product from "../../components/products/products"



const Home = ({ addCart }) => {

    
  return (
    <>
        <Banner/>
        <Product addCart={addCart}/>
    </>
  )
}

export default Home