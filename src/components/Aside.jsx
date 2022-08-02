import React from "react";
import { useContextProvider } from "../store/Context";

function Aside() {
  const { dispatch } = useContextProvider();

  return (
    <>
      <div className="radio">
        <input type="radio" id="a" name="show" value="porcentual" onChange={() => dispatch({ type: "PORCENTUAL" })}/>
        <label>Porcentual (%)</label>
      </div>
      <div className="radio">
        <input type="radio" id="b" name="show" value="total" onChange={() => dispatch({ type: "PORCENTUAL" })}checked/>
        <label>Total</label>
      </div>
    </>
  );
}

export default Aside;
