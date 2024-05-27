const albumsRouter = require("./routers/albums-router");
const artistsRouter = require("./routers/artists-router");
const songsRouter = require("./routers/songs-router");
const indexRouter = require("express").Router();

/*
 '/(route)'
    {
        '/albums' =>  albumsRouter
    }[route]
*/
indexRouter.use("/albums", albumsRouter);
indexRouter.use("/artists", artistsRouter);
indexRouter.use("/songs", songsRouter);

/*
    add some index route indexRouter.use('/', homeRouter)
*/

module.exports = indexRouter;
