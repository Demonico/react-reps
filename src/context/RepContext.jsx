import React, { useContext, useReducer } from 'react'

import API from '../utils/API'

const RepContext = React.createContext({})

export const useRepContext = () => useContext(RepContext)

const initialState = {
  reps: [],
  sens: [],
}

const repReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REPS':
      return {
        ...state,
        reps: action.results,
      }
    case 'ADD_SENS':
      return {
        ...state,
        sens: action.results,
      }
    default:
      return state
  }
}

const addReps = (results) => ({
  type: 'ADD_REPS',
  results,
})

const addSens = (results) => ({
  type: 'ADD_SENS',
  results,
})

export default function RepProvider({ children }) {
  const [repState, dispatch] = useReducer(repReducer, initialState)

  const fetchReps = async (stateCode) => {
    const response = await API.getReps(stateCode)
    dispatch(addReps(response.data.results))
  }

  const fetchSens = async (stateCode) => {
    const response = await API.getSens(stateCode)
    dispatch(addSens(response.data.results))
  }

  return (
    <RepContext.Provider value={{ repState, fetchReps, fetchSens }}>
      {children}
    </RepContext.Provider>
  )
}
