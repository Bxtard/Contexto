import React from "react";
import { useContextProvider } from "../store/Context";

function Candidate4() {
  const { dispatch } = useContextProvider();

  return (
    <section className="col">
      <h3>candidate 4</h3>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => dispatch({ type: "VOTE_CANDIDATE4" })}
      >
        vote
      </button>
    </section>
  );
}

export default Candidate4;
