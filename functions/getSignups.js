const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const API_KEY = 'VmFPQzZnU041pybFhhdXVMUUN1QT09';
  const SIGNUP_ID = 'YOUR_SIGNUP_ID_HERE'; // Replace with your real SignUp ID

  try {
    const response = await fetch(`https://api.signupgenius.com/v2/k/signups/report/all/${SIGNUP_ID}/?user_key=${API_KEY}`);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to fetch signups',
        details: err.message
      })
    };
  }
};
