const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const API_KEY = 'VmFPQzZnU041pybFhhdXVMUUN1QT09';
  const URL = `https://api.signupgenius.com/v2/k/signups/created/active/?user_key=${API_KEY}`;

  try {
    const res = await fetch(URL, {
      headers: { "Accept": "application/json" }
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP error! Status: ${res.status}, Body: ${text}`);
    }

    const data = await res.json();

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: "Failed to fetch signups", details: err.message }),
    };
  }
};
