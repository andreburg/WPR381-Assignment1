const { getArtistAlbums } = require("../../../spotify-lib/endpoints/albums");
const inquirer = require("inquirer");
const albumPage = require("./album-page");

const albumsPage = (artistID) => () => {
    console.clear();
    getArtistAlbums(artistID).then((albums) => {
        const options = {
            type: "list",
            loop: false,
            name: "choice",
            message: "Choose an option:",
            choices: albums.map((album) => ({
                name: `${album.name}`,
                value: albumPage(album.id),
            })),
        };

        inquirer
            .prompt(options)
            .then((answer) => {
                answer.choice();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
};

module.exports = albumsPage;
