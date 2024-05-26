const { getArtistAlbums } = require("../../controllers/albums-controller");
const albumsRouter = require("express").Router();

albumsRouter.get("", getArtistAlbums);

module.exports = albumsRouter;
