import React, { Component } from "react";
import styled from "styled-components";

const A = styled.a`
  color: #c1b6ba;
`;
const LIST = styled.li`
  list-style-type: none;
  width: 100%;
`;

class Footer extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          fontFamily: "san-fansf",
          float: "left",
          textAlign: "center",
          backgroundColor: "black",
          margintop: -22,
          width: "100%"
        }}
      >
        <div
          style={{
            padding: 30,
            fontSize: 20,
            float: "left",
            marginLeft: 120,
            background: "black"
          }}
        >
          <h4 style={{ color: "#fff" }}>Get Start</h4>
          <LIST>
            <A href="">Home</A>
          </LIST>
          <LIST>
            <A href="">Sign us</A>
          </LIST>
          <LIST>
            <A href="">Download</A>
          </LIST>
        </div>
        <div style={{ float: "center" }}>
          <div
            style={{
              padding: 30,
              fontSize: 20,
              float: "left",
              marginLeft: 120
            }}
          >
            <h4 style={{ color: "#fff" }}>About As</h4>
            <LIST>
              <A href=""> About</A>
            </LIST>
            <LIST>
              <A href="">Sign us</A>
            </LIST>
            <LIST>
              <A href="">Download</A>
            </LIST>
          </div>
          <div
            style={{
              padding: 30,
              fontSize: 20,
              float: "left",
              marginLeft: 120
            }}
          >
            <h4 style={{ color: "#fff" }}>Feature</h4>
            <LIST>
              <A href="">Feature</A>
            </LIST>
            <LIST>
              <A href="">Sign us</A>
            </LIST>
            <LIST>
              <A href="">Download</A>
            </LIST>
          </div>
          <div
            style={{
              padding: 30,
              fontSize: 20,
              float: "left",
              marginLeft: 120
            }}
          >
            <h4 style={{ color: "#fff" }}>Legal</h4>
            <LIST>
              <A href="">Home</A>
            </LIST>
            <LIST>
              <A href="">Sign us</A>
            </LIST>
            <LIST>
              <A href="">Download</A>
            </LIST>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
