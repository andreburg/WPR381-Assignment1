const { searchArtists } = require('../../controllers/artists-controller');
const artistsRouter = require('express').Router();

artistsRouter.get('', searchArtists);

module.exports = artistsRouter;