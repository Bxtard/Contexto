import React from "react";
import { useContextProvider } from "../store/Context";

function Aside() {
  const { state, dispatch } = useContextProvider();

  return (
    <aside>
      <section class="input-group-text">
        <input
          class="form-check-input mt-0 "
          type="radio"
          name="show"
          value="total"
          checked={!state.porcentual}
          onChange={() => dispatch({ type: "PORCENTUAL" })}
        />
        <label class="form-control">Total</label>
      </section>
      <section class="input-group-text">
        <input
          class="form-check-input mt-0"
          type="radio"
          name="show"
          value="porcentual"
          checked={state.porcentual}
          onChange={() => dispatch({ type: "PORCENTUAL" })}
        />
        <label class="form-control">Percentual (%)</label>
      </section>
      <section class="input-group-text">
        <input
          class="form-check-input mt-0"
          type="checkbox"
          name="showCandidate1"
          onChange={() => dispatch({ type: "SHOW_CANDIDATE1" })}
        />
        <label class="form-control">Candidate 1</label>
      </section>
      <section class="input-group-text">
        <input
          class="form-check-input mt-0"
          type="checkbox"
          name="showCandidate2"
          onChange={() => dispatch({ type: "SHOW_CANDIDATE2" })}
        />
        <label class="form-control">Candidate 2</label>
      </section>
      <section class="input-group-text">
        <input
          class="form-check-input mt-0"
          type="checkbox"
          name="showCandidate3"
          onChange={() => dispatch({ type: "SHOW_CANDIDATE3" })}
        />
        <label class="form-control">Candidate 3</label>
      </section>
      <section class="input-group-text">
        <input
          class="form-check-input mt-0"
          type="checkbox"
          name="showCandidate4"
          onChange={() => dispatch({ type: "SHOW_CANDIDATE4" })}
        />
        <label class="form-control">Candidate 4</label>
      </section>
    </aside>
  );
}

export default Aside;
