import React, { Component } from "react";

import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      fire: { backgroundColor: "red" },
      i: 0
    };
  }

  visibleOnclick = () => {
    this.setState({ visible: !this.state.visible });
  };
  changeColor = () => {
    let arr = [
      { backgroundColor: "red" },
      { backgroundColor: "green" },
      { backgroundColor: "blue" }
    ];
    if (this.state.i >= 2) {
      this.setState({ i: 0 });
    } else {
      this.setState({ i: this.state.i + 1 });
    }
    this.setState({ fire: arr[this.state.i] });
  };
  render() {
    const visible = this.state.visible;
    return (
      <div>
        <button
          onClick={this.changeColor}
          style={{ height: "300px", width: "300px", fontSize: "45px" }}
        >
          {visible ? "show" : "hide"}
        </button>

        <div style={this.state.fire}>this is content for Code Camp</div>
      </div>
    );
  }
}
