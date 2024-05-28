const { getArtistAlbums } = require("../../../spotify-lib/endpoints/albums");
const inquirer = require("inquirer");
const albumPage = require("./album-page");
const chalk = require("chalk");

/**
 * **Function that renders page displaying albums related to an artist.**
 *
 * @param {Object} artist **Used to access artist details to search for albums and display minimal information.**.
 * @param {() => void} back **When a user wants to navigate back the function will callback this function**.
 *
 */
const artistAlbumsPage = (artist, back) => () => {
    console.clear();
    console.log(chalk.bold.underline(`${artist.name}'s Albums:`));
    getArtistAlbums(artist.id).then((albums) => {
        const options = {
            type: "list",
            loop: false,
            name: "choice",
            message: "Choose an option:",
            choices: [
                ...albums.map((album) => ({
                    name: `${album.name}`,
                    value: albumPage(album.id, artistAlbumsPage(artist, back)),
                })),
                {
                    name: chalk.red("Go Back"),
                    value: back,
                },
            ],
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

module.exports = artistAlbumsPage;
