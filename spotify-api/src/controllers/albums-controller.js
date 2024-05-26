const spotifyApi = require("../lib/spotify-api");
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
    //const albums = [];
    //const { id } = req.query;
    //temp ="4llAOeA6kEF4ytaB2fsmcW";
    const { artist_id } = req.query;
    const albums = await spotifyApi.artists.albums(artist_id);
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
