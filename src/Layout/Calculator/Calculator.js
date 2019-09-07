import React, { Component } from "react";
import Screen from "../Calculator/Screen/Screen";
import Keypad from "./Keypad/Keypad";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      equation: "",
      result: 0
    };
  }
  render() {
    return (
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result} />
        <Keypad />
      </main>
    );
  }
}

export default Calculator;
