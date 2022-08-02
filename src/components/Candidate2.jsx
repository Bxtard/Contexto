import React from 'react'
import { useContextProvider } from "../store/Context"

function Candidate2() {
  
  const {state, dispatch} = useContextProvider();

  return (
    <div className="candidate">
      <h3>candidato 2</h3>
      <button type="button" onClick={() => dispatch({type: "VOTE_CANDIDATE2"})}>vote</button>
    </div>
  )
}

export default Candidate2