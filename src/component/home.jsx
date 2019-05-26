import React, { Component } from "react";
import styled from "styled-components";

import Hello from "./image";

const DIV = styled.div`
  /* background: linear-gradient(to right bottom, #fff 45%, #e83e8c 40%);*/
  background-image: url("Product-Info.jpg");
`;
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <DIV>
          <Hello />
        </DIV>
      </>
    );
  }
}

export default Home;
