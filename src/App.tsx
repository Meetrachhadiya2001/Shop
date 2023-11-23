import "./App.css";
import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductCardList } from "./components/ProductCards";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ProductCardList />
      <Features />
      <Footer />
    </>
  );
}

export default App;
