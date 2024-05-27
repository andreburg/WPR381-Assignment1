const albumsEndpoint = require("../lib/spotify-lib/endpoints/albums");
const { Request, Response } = require("express");

/**
 * Route returning all songs related to an artist.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 */
const getArtistAlbums = async (req, res) => {
    try {
        const { artistID } = req.query;
        const albums = await albumsEndpoint.getArtistAlbums(artistID);
        res.status(200).json({
            data: albums,
        });
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

module.exports = {
    getArtistAlbums,
};
