const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const API_KEY = 'VmFPQzZnMU04TlpybFhhdXVMUUN1QT09';
  const GROUP_ID = '23155146';

  const url = `https://api.signupgenius.com/v2/k/signups/group/${GROUP_ID}/?user_key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json(); // switch back to .json()

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch signups', details: error.message })
    };
  }
};
