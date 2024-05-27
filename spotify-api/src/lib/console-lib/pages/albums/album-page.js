const {
    getAlbumInformation,
} = require("../../../spotify-lib/endpoints/albums");
const inquirer = require("inquirer");
const songPage = require("../songs/song-page");

const albumPage = (albumID) => () => {
    console.clear();
    getAlbumInformation(albumID).then((album) => {
        console.table(
            [album].map((album) => ({
                "Album Name": album.name,
                Link: album.external_urls.spotify,
                Artists: album.artists.map((artist) => artist.name).join(", "),
                Label: album.label,
                "Release Date": album.release_date,
                Popularity: album.popularity,
                "Total Tracks": album.total_tracks,
            }))
        );

        const options = {
            type: "list",
            name: "choice",
            loop: false,
            message: "Choose an option:",
            choices: album.tracks.items.map((track) => ({
                name: `${track.name}`,
                value: songPage(track.id),
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

module.exports = albumPage;
