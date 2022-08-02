import React from 'react'
import { useContextProvider } from "../store/Context"

function Total() {

  const {state} = useContextProvider();

  return (
    <div><h3>Total votos {state.total}</h3></div>
  )
}

export default Total