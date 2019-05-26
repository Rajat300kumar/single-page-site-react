import React from "react";
//import Footer from "./component/Footer";
import "./App.css";
import Footer from "./component/Footer";
import NavBar from "./component/navbar";
import Home from "./component/home";

import Feature from "./component/Featurs";
import Price from "./component/Pricing";
import Contect from "./component/Contect";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <Feature />
      <Price />
      <Contect />
      <Footer />
    </React.Fragment>
  );
}

export default App;
