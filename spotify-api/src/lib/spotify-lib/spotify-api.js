const { SpotifyApi } = require("@spotify/web-api-ts-sdk");

const spotifyApi = SpotifyApi.withClientCredentials(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
);

module.exports = spotifyApi;
