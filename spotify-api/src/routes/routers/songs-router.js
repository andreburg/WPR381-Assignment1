const { getArtistSongs } = require('../../controllers/songs-controller');
const songsRouter = require('express').Router();

songsRouter.get('', getArtistSongs);

module.exports = songsRouter;