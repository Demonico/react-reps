export const addReps = (results) => ({
  type: 'ADD_REPS',
  results,
})

export const addSens = (results) => ({
  type: 'ADD_SENS',
  results,
})

export const changeListType = (listType) => ({
  type: 'CHANGE_LIST_TYPE',
  payload: listType,
})

export const setRep = (rep) => ({
  type: 'SET_REP',
  payload: rep,
})

export const removeRep = {
  type: 'REMOVE_REP',
}
