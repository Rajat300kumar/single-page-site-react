import React, { Component } from "react";
import { FaBeer } from "react-icons/fa";

class Feature extends Component {
  state = {};
  render() {
    return (
      <div style={{ padding: 20 }}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "san-fansf",
            marginTop: 30,
            fontSize: 35
          }}
        >
          Features
        </h1>
        <div style={{ display: "flex", padding: 50 }}>
          <div style={{ textAlign: "center" }}>
            <i style={{ color: "blue" }} class="fas fa-3x fa-bell" />
            <h3>Features 1</h3>
            <p
              style={{
                fontFamily: "sans-serif",
                textAlign: "center",
                color: "#6c757d"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              elementum tristique arcu, in tristique sapien commodo sodales.
              Vivamus condimentum quam mi.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <i style={{ color: "#e83e8c" }} class="fas fa-3x fa-rocket" />
            <h3>Features 2</h3>
            <p
              style={{
                fontFamily: "sans-serif",
                textAlign: "center",
                color: "#6c757d"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur, est sed vestibulum viverra, mi dui semper erat, non
              placerat dolor est
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <i style={{ color: "orange" }} class="fas fa-3x fa-clock" />
            <h3>Features 3</h3>
            <p
              style={{
                fontFamily: "sans-serif",
                textAlign: "center",
                color: "#6c757d"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur, est sed vestibulum viverra, mi dui semper erat, non
              placerat dolor est
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
