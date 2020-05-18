import React, { useContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import API from '../utils/API'

const RepContext = React.createContext({})

export const useRepContext = () => useContext(RepContext)

const initialState = {
  listType: '',
  rep: null,
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
    case 'CHANGE_LIST_TYPE':
      return {
        ...state,
        listType: action.payload,
      }
    case 'SET_REP':
      return {
        ...state,
        rep: action.payload,
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

const changeListType = (listType) => ({
  type: 'CHANGE_LIST_TYPE',
  payload: listType,
})

const setRep = (rep) => ({
  type: 'SET_REP',
  payload: rep,
})

function injectID(arr) {
  return arr.map((elem) => ({ ...elem, id: uuidv4() }))
}

export default function RepProvider({ children }) {
  const [repState, dispatch] = useReducer(repReducer, initialState)

  const fetchReps = async (stateCode) => {
    const response = await API.getReps(stateCode)
    const withIDs = injectID(response.data.results)
    dispatch(addReps(withIDs))
  }

  const fetchSens = async (stateCode) => {
    const response = await API.getSens(stateCode)
    const withIDs = injectID(response.data.results)
    dispatch(addSens(withIDs))
  }

  const setListType = (listType) => {
    dispatch(changeListType(listType))
  }

  const selectRep = (rep) => {
    dispatch(setRep(rep))
  }

  return (
    <RepContext.Provider
      value={{ repState, fetchReps, fetchSens, setListType, selectRep }}
    >
      {children}
    </RepContext.Provider>
  )
}
