import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Banner from "./components/banner/banner";
import Product from "./components/products/products";
import { GlobalStyle } from "./styleGlobal/styleGlobal";
import { useState } from "react";

function App() {
const [itensCart, setItensCart] = useState([])

  const addCart = (product) =>{
    setItensCart([...itensCart, product])
  }
  
  return (
    <>
    <GlobalStyle/>
    <Header itensCart={itensCart}/>
    <Menu/>
    <Banner/>
    <Product addCart={addCart}/>
    </>
  );
}

export default App;
