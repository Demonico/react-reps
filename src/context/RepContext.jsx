import React, { useContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import API from '../utils/API'
import repReducer from './repReducer'
import {
  addReps,
  addSens,
  changeListType,
  setRepAction,
  removeRepAction,
} from './repActions'

const RepContext = React.createContext({})

export const useRepContext = () => useContext(RepContext)

const initialState = {
  listType: '',
  rep: null,
  reps: [],
  sens: [],
}

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

  const setRep = (rep) => {
    dispatch(setRepAction(rep))
  }

  const removeRep = () => {
    dispatch(removeRepAction())
  }

  return (
    <RepContext.Provider
      value={{ repState, fetchReps, fetchSens, setListType, setRep, removeRep }}
    >
      {children}
    </RepContext.Provider>
  )
}
