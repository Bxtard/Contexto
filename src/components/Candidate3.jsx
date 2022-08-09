import React from "react";
import { useContextProvider } from "../store/Context";

function Candidate3() {
  const { dispatch } = useContextProvider();

  return (
    <section className="col">
      <h3>candidate 3</h3>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => dispatch({ type: "VOTE_CANDIDATE3" })}
      >
        vote
      </button>
    </section>
  );
}

export default Candidate3;
