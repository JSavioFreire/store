import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Banner from "./components/banner/banner";
import Product from "./components/products/products";
import { GlobalStyle } from "./styleGlobal/styleGlobal";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Menu/>
    <Banner/>
    <Product/>
    </>
  );
}

export default App;
