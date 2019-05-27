import React, { Component } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 500px;
  opacity: 0.9;
`;
const CENTER = styled.h2`
  position: absolute;
  top: 29%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: #3498db;
  font-size: 35px;
  font-family: sans-serif;
`;

class Hello extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Image
            src="https://image.shutterstock.com/z/stock-photo-manager-businessman-coach-leadership-plan-to-increase-company-productivity-268397873.jpg"
            alt=""
          />
          <CENTER>
            Welcome to the single page
            <br />
            of Reactjs
          </CENTER>
        </div>
      </React.Fragment>
    );
  }
}

export default Hello;
