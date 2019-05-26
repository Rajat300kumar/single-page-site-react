import React, { Component } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 500px;
  opacity: 0.9;
`;
const CENTER = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 30px;
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
            Welcome To The Demo Page
            <br />
            OF Reactjs
          </CENTER>
        </div>
      </React.Fragment>
    );
  }
}

export default Hello;
