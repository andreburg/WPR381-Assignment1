const artistsEndpoint = require("../lib/spotify-lib/endpoints/artists");
const path = require("path");
const { Request, Response } = require("express");

/**
 * Route returning all artists related to a query parameter.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 */
const searchArtists = async (req, res) => {
    try {
        const { name } = req.query;
        artistsEndpoint.searchArtists(name);
        const artists = await artistsEndpoint.searchArtists(name);
        res.status(200).render(
            path.join(__dirname, "src", "../../", "views", "artist.ejs"),
            {
                artists,
            }
        );
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

/**
 * Route returning all artists related to a query parameter.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 */
const searchArtist = async (req, res) => {
    try {
        const { id } = req.params;
        const artist = await artistsEndpoint.searchArtist(id);
        res.status(200).json({
            data: artist,
        });
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

/**
 * Route returning all artists related to a query parameter.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 */
const searchRelatedArtist = async (req, res) => {
    try {
        const { artistID } = req.query;
        const relatedArtists = await artistsEndpoint.searchRelatedArtist(
            artistID
        );
        res.status(200).json({
            data: relatedArtists,
        });
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

module.exports = {
    searchArtists,
    searchArtist,
    searchRelatedArtist,
};
