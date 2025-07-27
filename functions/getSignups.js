export async function handler(event, context) {
  const API_KEY = 'VmFPQzZnMU04TlpybFhhdXVMUUN1QT09';
  const GROUP_ID = '23155146';

  try {
    const res = await fetch(`https://api.signupgenius.com/v2/k/signups/group/${GROUP_ID}/?user_key=${API_KEY}`);
    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch signups', details: err.message }),
    };
  }
}
