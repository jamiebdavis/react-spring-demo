import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class Component2 extends Component {
  state = {};
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem optio expedita veniam soluta amet. Illo impedit ullam
                minus neque possimus, inventore cum eveniet voluptate, dolorem
                vel atque hic eius odit?
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  backgroundColor: "#555555",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer"
};

export default Component2;
