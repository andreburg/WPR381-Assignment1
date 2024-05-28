const inquirer = require("inquirer"); // Pretty Prompts
const chalk = require("chalk"); // Pretty Formatting
const searchPage = require("./utils/search-page");
const albumsPage = require("./albums/albums-page");
const songsPage = require("./songs/songs-page");
const { artistsPage } = require("./artists/artists-page");

const homePage = () => () => {
    console.clear();
    const options = {
        type: "list",
        name: "choice",
        message: "What would you like to do?:",
        choices: [
            {
                name: "Search Artists",
                value: searchPage(
                    "Artist Explorer",
                    "Search for a artist...",
                    homePage(),
                    artistsPage
                ),
            },
            {
                name: "Search Songs",
                value: searchPage(
                    "Song Explorer",
                    "Search for a song...",
                    homePage(),
                    songsPage
                ),
            },
            {
                name: "Search Albums",
                value: searchPage(
                    "Album Explorer",
                    "Search for an album...",
                    homePage(),
                    albumsPage
                ),
            },
            {
                name: chalk.red("Exit!"),
                value: () => {
                    console.clear();
                    process.exit();
                },
            },
        ],
    };

    console.log(chalk.bgWhite.bold.black("Welcome to Spotify Explorer!"));
    console.log(chalk.underline("We are here to help you explore music...!\n"));

    inquirer
        .prompt(options)
        .then((answer) => {
            // When user selects an option, the function related to the option will be envoked and will load the next page.
            answer.choice();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

module.exports = {
    homePage,
};
