import React from "react";
import { useContextProvider } from "../store/Context";

function Candidate2() {
  const { dispatch } = useContextProvider();

  return (
    <section className="col">
      <h3>candidate 2</h3>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => dispatch({ type: "VOTE_CANDIDATE2" })}
      >
        vote
      </button>
    </section>
  );
}

export default Candidate2;
