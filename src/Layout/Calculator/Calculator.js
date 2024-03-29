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

  onButtonPress = event => {
    let equation = this.state.equation;
    const pressedButton = event.target.innerHTML;

    if (pressedButton === "C") return this.clear();
    //removes all elements from a set object
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    )
      equation += pressedButton;
    else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1)
      equation += " " + pressedButton + " ";
    else if (pressedButton === "=") {
      try {
        const evalResult = eval(equation);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert("Not a mathmatical equation");
      }
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }

    this.setState({ equation: equation });
  };
  clear() {
    this.setState({ equation: "", result: 0 });
  }
  render() {
    return (
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result} />
        <Keypad onButtonPress={this.onButtonPress} />
      </main>
    );
  }
}

export default Calculator;
