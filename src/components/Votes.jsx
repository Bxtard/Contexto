import React from "react";
import { useContextProvider } from "../store/Context";

function Votes() {
  const { state } = useContextProvider();
  return (
    <>
      {state.porcentual ? (
        <>
          {state.showCandidate1 ? (
            <h3>
              candidate 1 <br />
              {((state.candidate1 * 100) / state.total).toFixed(2)}%
            </h3>
          ) : null}
          {state.showCandidate2 ? (
            <h3>
              candidate 2 <br />
              {((state.candidate2 * 100) / state.total).toFixed(2)}%
            </h3>
          ) : null}
          {state.showCandidate3 ? (
            <h3>
              candidate 3 <br />
              {((state.candidate3 * 100) / state.total).toFixed(2)}%
            </h3>
          ) : null}
          {state.showCandidate4 ? (
            <h3>
              candidate 4 <br />
              {((state.candidate4 * 100) / state.total).toFixed(2)}%
            </h3>
          ) : null}
        </>
      ) : (
        <>
          {state.showCandidate1 ? (
            <h3>
              candidate 1 <br />
              {state.candidate1}
            </h3>
          ) : null}
          {state.showCandidate2 ? (
            <h3>
              candidate 2 <br />
              {state.candidate2}
            </h3>
          ) : null}
          {state.showCandidate3 ? (
            <h3>
              candidate 3 <br />
              {state.candidate3}
            </h3>
          ) : null}
          {state.showCandidate4 ? (
            <h3>
              candidate 4 <br />
              {state.candidate4}
            </h3>
          ) : null}
        </>
      )}
    </>
  );
}

export default Votes;
