const chalk = require("chalk");
const spotifyApi = require("../spotify-api");
const { Request, Response } = require("express");

/**
 * All artists related to a name.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
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
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
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
