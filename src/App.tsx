import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductCardList } from "./components/ProductCards";

function App() {
  return (
    <>
      <AnimatedCursor
        showSystemCursor={true}
        innerSize={15}
        outerSize={14}
        color="9, 162, 255"
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Header />
      <Banner />
      <ProductCardList />
      <Features />
      <Footer />
    </>
  );
}

export default App;
