const spotifyApi = require("../spotify-api");
const { Request, Response } = require("express");

/**
 * Route returning all songs related to an artist.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 * @returns {Promise<Object[]>}
 */
const getArtistSongs = async (artistID) => {
    const songs = await spotifyApi.artists.topTracks(artistID);
    //Modify

    return songs;
};

module.exports = {
    getArtistSongs,
};
