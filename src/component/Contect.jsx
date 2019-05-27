import React, { Component } from "react";
import styled from "styled-components";
import { inherits } from "util";
import Adress from "./Adderss";

const DIV2 = styled.div`
  margin: 25px;
  background-color: "yellow";
  font-size: 25px;
  height: fit-content;
  background-color: #fff;
  font-family: "san-fansf";
  color: #6c757d !important;
  width: 100%;
`;

const TEXT = styled.textarea`
  border-radius: 12px;

  font-size: 10pt;
  background-color: #e9ecef;
  padding: 0.575rem 1.12rem;
  opacity: 0.8;
  border: 1px solid #f8f9fa;
  margin-top: 15px;
`;
const STYLED = styled.input`
  border-radius: 12px;
  height: 40px;
  font-size: 10pt;
  background-color: #e9ecef;
  padding: 0.575rem 1.12rem;
  opacity: 0.8;
  border: 1px solid #f8f9fa;
`;

class Contect extends Component {
  state = { name: "", email: "", financialGoal: "", message: "" };
  submit = event => {
    console.log(event.target.value);
    event.preventDefault();
    this.props.searchtext(this.state.text);
  };
  textset = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name, email, financialGoal, message } = this.state;
    return (
      <>
        <div style={{ float: "inherit" }}>
          <h1
            style={{
              fontFamily: "san-fansf",
              padding: 25,
              textAlign: "center",
              fontSize: 35
            }}
          >
            Contects
          </h1>

          <div
            style={{
              float: "left",
              marginBlockEnd: inherits,
              marginright: "100px",
              padding: "20px",

              fontSize: "25px",
              fontFamily: "san-fansf",
              height: "fitcontent",

              color: "#6c757d !important"
            }}
          >
            Name :
            <STYLED
              type="text"
              name="name"
              onChange={this.textset}
              value={name}
              size="45"
            />
            <br />
            Email :
            <STYLED
              type="text"
              name="email"
              onChange={this.textset}
              value={email}
              size="45"
            />
            <br />
            Phone:
            <STYLED
              type="text"
              name="email"
              onChange={this.textset}
              value={email}
              size="45"
            />
            <br />
            <p>Message:</p>
            <TEXT
              style={{ marginTop: 5, marginLeft: 0 }}
              type="text"
              name="message"
              onChange={this.textset}
              value={message}
              rows="9"
              cols="49"
            >
              Message:
            </TEXT>
            <br />
            <button
              style={{
                float: "center",
                backgroundColor: "#fff",
                marginLeft: 80
              }}
            >
              Submit
            </button>
          </div>

          <Adress />
        </div>
      </>
    );
  }
}

export default Contect;
