const { getAlbumSongs, getArtistSongs, getSong } = require('../../controllers/songs-controller');
const songsRouter = require('express').Router();

songsRouter.get('/album-songs/:id', getAlbumSongs);
songsRouter.get('/artist-songs/:id', getArtistSongs);
songsRouter.get('/get-song/:id', getSong);

module.exports = songsRouter;