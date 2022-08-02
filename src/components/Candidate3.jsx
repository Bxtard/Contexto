import React from 'react'
import { useContextProvider } from "../store/Context"

function Candidate3() {

  const {state, dispatch} = useContextProvider();

  return (
    <div className="candidate">
      <h3>candidato 3</h3>
      <button type="button" onClick={() => dispatch({type: "VOTE_CANDIDATE3"})}>vote</button>
    </div>
  )
}

export default Candidate3