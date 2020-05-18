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

export default repReducer
