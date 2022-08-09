import React from "react";
import { useContextProvider } from "../store/Context";

function Total() {
  const { state } = useContextProvider();

  return (
    <section className="form-control">
      <h3>Total votos {state.total}</h3>
    </section>
  );
}

export default Total;
