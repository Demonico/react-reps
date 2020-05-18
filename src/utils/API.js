import axios from 'axios'

export default {
  getReps: async function (stateCode) {
    return axios.get('/.netlify/functions/rep-by-state', {
      params: {
        stateCode,
        type: 'rep',
      },
    })
  },
  getSens: async function (stateCode) {
    return axios.get('/.netlify/functions/rep-by-state', {
      params: {
        stateCode,
        type: 'sen',
      },
    })
  },
}
