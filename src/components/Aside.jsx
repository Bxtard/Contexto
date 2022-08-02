import React from "react";
import { useContextProvider } from "../store/Context";

function Aside() {
  const { dispatch } = useContextProvider();

  return (
    <>
      <div className="radio">
        <input type="radio" name="show" value="total" checked onChange={() => dispatch({ type: "PORCENTUAL" })}/>
        <label>Total</label>
      </div>
      <div className="radio">
        <input type="radio" name="show" value="porcentual" onChange={() => dispatch({ type: "PORCENTUAL" })}/>
        <label>Porcentual (%)</label>
      </div>
      <div className="checkbox">
        <input type="checkbox"name="showCandidate1" onChange={() => dispatch({ type: "SHOW_CANDIDATE1" })}/>
        <label>Candidate 1</label>
      </div>
      <div className="checkbox">
        <input type="checkbox"name="showCandidate2" onChange={() => dispatch({ type: "SHOW_CANDIDATE2" })}/>
        <label>Candidate 2</label>
      </div>
      <div className="checkbox">
        <input type="checkbox"name="showCandidate3" onChange={() => dispatch({ type: "SHOW_CANDIDATE3" })}/>
        <label>Candidate 3</label>
      </div>
      <div className="checkbox">
        <input type="checkbox"name="showCandidate4" onChange={() => dispatch({ type: "SHOW_CANDIDATE4" })}/>
        <label>Candidate 4</label>
      </div>

    </>
  );
}

export default Aside;
