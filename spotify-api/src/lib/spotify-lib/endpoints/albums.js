const spotifyApi = require("../spotify-api");
const { Request, Response } = require("express");

/**
 * Route returning all songs related to an artist.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 * @returns {Promise<[]>}
 */
const getArtistAlbums = async (artistID) => {
    const albums = await spotifyApi.artists.albums(artistID);
    return albums;
};

/**
 * Route returning top 100 albums, with optional genre filter `/:genre`.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 */
const getTop100Albums = async (req, res) => {
    try {
        const albums = [];

        //replace with logic

        res.status(200).json({
            data: albums,
        });
    } catch (/** @type {Error} */ e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

module.exports = {
    getArtistAlbums,
    getTop100Albums,
};
