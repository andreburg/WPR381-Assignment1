const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;


async function getSpotifyToken() {
    const url = 'https://accounts.spotify.com/api/token';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
    const data = await response.json();
    // console.log('The access token is ' + data.access_token);

    return data.access_token;
  }

  module.exports = {getSpotifyToken}