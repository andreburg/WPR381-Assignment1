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
const getArtistAlbums = async (artistID) => {
    const albums = (await spotifyApi.artists.albums(artistID)).items;
    return albums;
};

const getAlbumInformation = async (albumID) => {
    const album = await spotifyApi.albums.get(albumID);
    return album;
};

module.exports = {
    getArtistAlbums,
    getAlbumInformation,
};
