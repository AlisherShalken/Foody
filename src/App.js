import logo from './logo.svg';
import Header from "./Сomponents/PageBlocks/Header/Header";
import AboutApp from "./Сomponents/PageBlocks/AboutApp/AboutApp";
import OurPartners from "./Сomponents/PageBlocks/OurPartners/OurPartners";
import Demonstration from "./Сomponents/PageBlocks/Demonstration/Demonstration";
import Form from "./Сomponents/PageBlocks/Form/Form";
import Functions from "./Сomponents/PageBlocks/Functions/Functions";
import Price from "./Сomponents/PageBlocks/Price/Price";
import Gift from "./Сomponents/PageBlocks/Gift/Gift";
import Footer from "./Сomponents/PageBlocks/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Header />
      {/*<Header />*/}

      <div className="inner">
          <AboutApp />
      </div>

      <OurPartners />

      <div className="inner">
          <div>
              <p className="title-word red-color">
                  Как это работает?
              </p>
          </div>
      </div>

      <Demonstration />

      <div className="inner second_inner">
          <Form />
          <Functions />
          <Price />
      </div>

      <Gift />
      <Footer />
    </div>
  );
}

export default App;
