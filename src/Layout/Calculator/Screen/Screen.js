import React from "react";
import Computation from "./Computation/Computation";
import Result from "./Result/Result";

const Screen = () => (
  <section className="screen">
    <Result />
    <Computation />
  </section>
);

export default Screen;
