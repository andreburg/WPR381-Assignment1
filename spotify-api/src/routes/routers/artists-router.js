const { searchArtists, searchArtist, searchArtistAlbums, searchArtistTracks, searchRelatedArtist } = require('../../controllers/artists-controller');
const artistsRouter = require('express').Router();

artistsRouter.get('', searchArtists);
artistsRouter.get('/artist', searchArtist);
artistsRouter.get('/albums', searchArtistAlbums);
artistsRouter.get('/tracks', searchArtistTracks);
artistsRouter.get('/related', searchRelatedArtist);

module.exports = artistsRouter;