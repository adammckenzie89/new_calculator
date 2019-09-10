import React from "react";
import Computation from "./Computation/Computation";
import Result from "./Result/Result";

const Screen = props => (
  <section className="screen">
    <Result>{props.result}</Result>
    <Computation>{props.equation}</Computation>
  </section>
);

export default Screen;
