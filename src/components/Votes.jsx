import React from "react";
import { useContextProvider } from "../store/Context";

function Votes() {
  const { state } = useContextProvider();
  return (
    <>
      {state.porcentual ? (
        <>
          <h3>
            candidate1 <br />
            {(state.candidate1*100)/state.total}%
          </h3>
          <h3>
            candidate2 <br />
            {(state.candidate2*100)/state.total}%
          </h3>
          <h3>
            candidate3 <br />
            {(state.candidate3*100)/state.total}%
          </h3>
          <h3>
            candidate4 <br />
            {(state.candidate4*100)/state.total}%
          </h3>
        </>
      ) : (
        <>
          <h3>
            candidate1 <br />
            {state.candidate1}
          </h3>
          <h3>
            candidate2 <br />
            {state.candidate2}
          </h3>
          <h3>
            candidate3 <br />
            {state.candidate3}
          </h3>
          <h3>
            candidate4 <br />
            {state.candidate4}
          </h3>
        </>
      )}
    </>
  );
}

export default Votes;
