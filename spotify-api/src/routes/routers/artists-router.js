const {
    searchArtists,
    searchArtist,
    searchRelatedArtist,
} = require("../../controllers/artists-controller");
const artistsRouter = require("express").Router();

artistsRouter.get("", searchArtists);
artistsRouter.get("/:id", searchArtist);
artistsRouter.get("/related", searchRelatedArtist);

module.exports = artistsRouter;
