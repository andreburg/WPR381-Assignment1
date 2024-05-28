const { SpotifyApi } = require("@spotify/web-api-ts-sdk");

/*
    Create a singleton object sothat we can reuse the same instance a number of times reducing redundant code.
*/
const spotifyApi = SpotifyApi.withClientCredentials(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
);

module.exports = spotifyApi;
