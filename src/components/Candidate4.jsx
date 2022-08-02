import React from 'react'
import { useContextProvider } from "../store/Context"

function Candidate4() {

  const {dispatch} = useContextProvider();

  return (
    <div className="candidate">
      <h3>candidato 4</h3>
      <button type="button" onClick={() => dispatch({type: "VOTE_CANDIDATE4"})}>vote</button>
    </div>
  )
}

export default Candidate4