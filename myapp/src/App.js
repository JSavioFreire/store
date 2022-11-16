import Header from "./components/header/header";
import Menu from "./components/menu/menu";

import Home from "./pages/home/Home";
import Product from "./pages/product/Product";

import { GlobalStyle } from "./styleGlobal/styleGlobal";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"


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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} addCart={addCart}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
