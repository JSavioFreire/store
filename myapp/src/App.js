import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Banner from "./components/banner/banner";
import { GlobalStyle } from "./provider/styleGlobal/styleGlobal";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Menu/>
    <Banner/>
    </>
  );
}

export default App;
