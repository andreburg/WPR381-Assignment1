const chalk = require("chalk");
const spotifyApi = require("../spotify-api");
const { Request, Response } = require("express");

/**
 * Returning all songs related to an artist.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 * @returns {Promise<Object[]>}
 */
const getArtistSongs = async (artistID) => {
    try {
        const songs = (await spotifyApi.artists.topTracks(artistID)).tracks;
        return songs;
    } catch (e) {
        console.log(chalk.red(`ERROR: ${e.message}`));
        return [];
    }
};

/**
 * Returning all songs related to a text string.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 * @returns {Promise<Object[]>}
 */
const searchSongs = async (name) => {
    try {
        const response = await spotifyApi.search(name, ["track"], "ZA", 50);
        let songs = response.tracks.items;
        return songs;
    } catch (e) {
        console.log(chalk.red(`ERROR: ${e.message}`));
        return [];
    }
};

/**
 * Returning detailed information regarding a specific song.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 * @returns {Promise<Object>}
 */
const getSongInformation = async (songID) => {
    try {
        const song = await spotifyApi.tracks.get(songID);
        return song;
    } catch (e) {
        console.log(chalk.red(`ERROR: ${e.message}`));
        return {};
    }
};

module.exports = {
    getArtistSongs,
    getSongInformation,
    searchSongs,
};
