const chalk = require("chalk");
const spotifyApi = require("../spotify-api");
const { Request, Response } = require("express");

/**
 * Returning all albums related to an artist.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 * @returns {Promise<Object[]>}
 */
const getArtistAlbums = async (artistID) => {
    try {
        const albums = (await spotifyApi.artists.albums(artistID)).items;
        return albums;
    } catch (e) {
        console.log(chalk.red(`ERROR: ${e.message}`));
        return [];
    }
};

/**
 * Returning all albums related to a text string.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 * @returns {Promise<Object[]>}
 */
const searchAlbums = async (name) => {
    try {
        const response = await spotifyApi.search(name, ["album"], "ZA", 50);
        let albums = response.albums.items;
        return albums;
    } catch (e) {
        console.log(chalk.red(`ERROR: ${e.message}`));
        return [];
    }
};

/**
 * Returning detailed information about an album.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 * @returns {Promise<Object>}
 */
const getAlbumInformation = async (albumID) => {
    try {
        const album = await spotifyApi.albums.get(albumID);
        return album;
    } catch (e) {
        console.log(chalk.red(`ERROR: ${e.message}`));
        return {};
    }
};

module.exports = {
    getArtistAlbums,
    getAlbumInformation,
    searchAlbums,
};
