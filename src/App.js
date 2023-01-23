import "./App.css";
import Header from "./component/header/Header";
import Hero from "./component/Hero/Hero";
import Product from "./component/Products/Product";
import Slider from "./component/Slider/Slider";
import Testimonial from "./component/Testimonial/Testimonial";
import Virtual from "./component/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Product/>
      <Testimonial/>
      </div>
  );
}

export default App;
