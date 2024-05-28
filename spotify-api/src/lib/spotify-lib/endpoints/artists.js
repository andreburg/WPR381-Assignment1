const chalk = require("chalk");
const spotifyApi = require("../spotify-api");

/**
 * All artists related to a name.
 *
 * @param {String} name - The text that will be used to search and filter for artists.
 *
 * @returns {Promise<Object[]>}
 */
const searchArtists = async (name) => {
    try {
        const response = await spotifyApi.search(name, ["artist"], "ZA", 50);
        let artists = response.artists.items;
        return artists;
    } catch (e) {
        console.log(chalk.red(`ERROR: ${e.message}`));
        return [];
    }
};

/**
 * Returns detailed information about an artist.
 *
 * @param {String} artistID - The artist ID that will be used to find detailed information about an artist.
 *
 * @returns {Promise<Object>}
 */
const searchArtist = async (artistID) => {
    try {
        const artist = await spotifyApi.artists.get(artistID);
        return artist;
    } catch (e) {
        console.log(chalk.red(`ERROR: ${e.message}`));
        return {};
    }
};

module.exports = {
    searchArtists,
    searchArtist,
};
