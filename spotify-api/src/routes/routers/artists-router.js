const { searchArtists, searchArtist, searchArtistAlbums } = require('../../controllers/artists-controller');
const artistsRouter = require('express').Router();

artistsRouter.get('', searchArtists);
artistsRouter.get('/artist', searchArtist);
artistsRouter.get('/artistAlbums', searchArtistAlbums);

module.exports = artistsRouter;