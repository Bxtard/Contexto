import React from "react";
import { useContextProvider } from "../store/Context";

function Candidate1() {
  const { dispatch } = useContextProvider();

  return (
    <div className="candidate">
      <h3>candidato 1</h3>
      <button
        type="button"
        onClick={() => dispatch({ type: "VOTE_CANDIDATE1" })}
      >
        vote
      </button>
    </div>
  );
}

export default Candidate1;
