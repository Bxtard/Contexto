import React from "react";
import { useContextProvider } from "../store/Context";

function Votes() {
  const { state } = useContextProvider();
  return (
    <section class="">
      {state.porcentual ? (
        <>
          {state.showCandidate1 ? (
            <label className="form-control">
              candidate 1 <br />
              {((state.candidate1 * 100) / state.total).toFixed(2)}%
            </label>
          ) : null}
          {state.showCandidate2 ? (
            <label className="form-control">
              candidate 2 <br />
              {((state.candidate2 * 100) / state.total).toFixed(2)}%
            </label>
          ) : null}
          {state.showCandidate3 ? (
            <label className="form-control">
              candidate 3 <br />
              {((state.candidate3 * 100) / state.total).toFixed(2)}%
            </label>
          ) : null}
          {state.showCandidate4 ? (
            <label className="form-control">
              candidate 4 <br />
              {((state.candidate4 * 100) / state.total).toFixed(2)}%
            </label>
          ) : null}
        </>
      ) : (
        <>
          {state.showCandidate1 ? (
            <label className="form-control">
              candidate 1 <br />
              {state.candidate1}
            </label>
          ) : null}
          {state.showCandidate2 ? (
            <label className="form-control">
              candidate 2 <br />
              {state.candidate2}
            </label>
          ) : null}
          {state.showCandidate3 ? (
            <label className="form-control">
              candidate 3 <br />
              {state.candidate3}
            </label>
          ) : null}
          {state.showCandidate4 ? (
            <label className="form-control">
              candidate 4 <br />
              {state.candidate4}
            </label>
          ) : null}
        </>
      )}
    </section>
  );
}

export default Votes;
