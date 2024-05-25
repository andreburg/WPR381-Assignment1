const spotifyApi = require('../lib/spotify-api');
const {Request, Response} = require('express');

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
        const artists = await spotifyApi.search(name , ["artist"]);
        res.status(200).json({
            data: artists
        });
    } catch(e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message
        })
    }
}

module.exports = {
    searchArtists,
}