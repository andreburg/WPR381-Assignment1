const spotifyApi = require("../spotify-api");
const { Request, Response } = require("express");

/**
 * Route returning all artists related to a query parameter.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 * @returns {Promise<Object[]>}
 */
const searchArtists = async (name) => {
    const response = await spotifyApi.search(name, ["artist"], "ZA", 50);
    let artists = response.artists.items;
    console.log(artists[0].images[0].url);
    return artists;
};

const searchArtist = async (artistID) => {
    const artist = await spotifyApi.artists.get(artistID);
    //Modify

    return artist;
};

const searchRelatedArtist = async (artistID) => {
    const relatedArtists = await spotifyApi.artists.relatedArtists(artistID);
    //Modify

    return relatedArtists;
};

module.exports = {
    searchArtists,
    searchArtist,
    searchRelatedArtist,
};
