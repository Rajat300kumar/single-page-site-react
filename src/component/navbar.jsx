import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LII = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  float: left;

  z-index: 1;
`;
const DIV = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  background-color: #025;
  opacity: 0.8;
`;

const Unorder = styled.ul`
  list-style-type: none;
`;
class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <DIV>
          <img
            src="https://www.flaticon.com/media/img/flaticon-logo.svg"
            height="25px"
            alt=""
          />
          <Unorder>
            <li style={{ float: "left" }}>
              <Link style={{ color: "#fff" }} class="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li style={{ float: "left" }}>
              <Link style={{ color: "#fff" }} class="nav-link" to="/#Feature">
                Feature
              </Link>
            </li>
            <li style={{ float: "left" }}>
              <Link style={{ color: "#fff" }} class="nav-link" to="/#Price">
                Price
              </Link>
            </li>
            <li style={{ float: "left" }}>
              <Link
                style={{ color: "#fff" }}
                class="nav-link"
                to="/Contect"
                tabindex="-1"
              >
                Contect
              </Link>
            </li>
          </Unorder>
        </DIV>
      </React.Fragment>
    );
  }
}

export default NavBar;
