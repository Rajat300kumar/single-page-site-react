import React, { Component } from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin: 15px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #f8f9fa;
  font-size: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 20px 10px -13px #0000000f;
  background-color: #fff;
  justify-content: center;
  color: #4d5656;
`;
const DIV1 = styled.div`
  justify-content: center;
  background: linear-gradient(to right top, #939ba2 50%, #fff 50%);
`;

class Price extends Component {
  state = {};
  render() {
    return (
      <>
        <DIV1>
          <h1
            style={{
              fontFamily: "san-fansf",
              padding: 30,
              textAlign: "center",
              fontSize: 35
            }}
          >
            Price
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <DIV>
              <h2 style={{ color: "#283747" }}>Start</h2>
              <hr />
              <p> For demo only</p>
              <p>For demo only</p>
              <p>For demo only</p>
            </DIV>
            <DIV>
              <h2 style={{ color: "##283747" }}>Advance</h2>
              <hr />
              <p>free time make</p>
              <p>free time make</p>
              <p>free time make</p>
            </DIV>
          </div>
        </DIV1>
      </>
    );
  }
}

export default Price;
