const spotifyApi = require("../lib/spotify-lib/spotify-api");
const { Request, Response } = require("express");

/**
 * Route returning all songs related to an artist.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 */
const getArtistSongs = async (req, res) => {
    try {
        const { artistID } = req.query;
        const songs = await spotifyApi.artists.topTracks(artistID);
        res.status(200).json({
            data: songs,
        });
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

/**
 * Route returning all songs related to an album.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 */
const getAlbumSongs = async (req, res) => {
    try {
        const songs = [];

        //replace with logic

        res.status(200).json({
            data: songs,
        });
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

/**
 * Route returning top 100 songs, with optional genre filter `/:genre`.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 */
const getTop100Songs = async (req, res) => {
    try {
        const songs = [];

        //replace with logic

        res.status(200).json({
            data: songs,
        });
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

module.exports = {
    getArtistSongs,
    getAlbumSongs,
    getTop100Songs,
};
