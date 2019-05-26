import React, { Component } from "react";
import styled from "styled-components";

const DIV3 = styled.div`
  color: #6c757d !important;
  margin-left: 30px;
  font-size: 25px;
  float: "center";
`;

class Adress extends Component {
  state = {};
  render() {
    return (
      <DIV3>
        <h4>ADDRESS</h4>
        <span>H.S.R layour benglur,karnatka,india</span>
        <h4>Email</h4>
        <span>rajatranjan300@gmail.com</span>
        <h4>PHONE</h4>
        <span>xxxx46985</span>
      </DIV3>
    );
  }
}

export default Adress;
