const axios = require('axios')

const baseURL = 'http://whoismyrepresentative.com'

const queryType = {
  rep: '/getall_reps_bystate.php',
  sen: '/getall_sens_bystate.php',
}

exports.handler = async (event, context) => {
  // console.log('params', event.queryStringParameters.state)
  const { stateCode, type } = event.queryStringParameters
  if (typeof queryType[type] === 'undefined') {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Please select a valid representative type.',
      }),
    }
  }

  let response

  try {
    response = await axios.get(queryType[type], {
      baseURL: baseURL,
      params: {
        state: stateCode,
        output: 'json',
      },
    })
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    }
  }
  // console.log('response', response.data)
  return {
    statusCode: 200,
    body: JSON.stringify({ results: response.data.results }),
  }
}
