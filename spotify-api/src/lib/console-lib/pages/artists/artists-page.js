const inquirer = require("inquirer");
const chalk = require("chalk");
const { searchArtists } = require("../../../spotify-lib/endpoints/artists");
const artistPage = require("./artist-page");

const artistsPage = (name) => () => {
    console.clear();
    searchArtists(name).then((artists) => {
        const options = {
            type: "list",
            name: "choice",
            loop: false,
            message: "Choose an option:",
            choices: artists.map((artist) => ({
                name: `${artist.name}`,
                value: artistPage(artist.id),
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

module.exports = {
    artistsPage,
};
