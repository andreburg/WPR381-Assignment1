const { SpotifyApi } = require("@spotify/web-api-ts-sdk");

(async () => {

    console.log("Searching Spotify for The Beatles...");

    const api = SpotifyApi.withClientCredentials(
        "d0a9cdda035a4a17bc8c1e1bd73fddff",
        "4d23968290e84ae584050a695c8fa90f"
    );

    const items = await api.search("The Beatles", ["artist"]);

    /*
    console.table(items.artists.items.map((item) => ({
        name: item.name,
        followers: item.followers.total,
        popularity: item.popularity,
    })));
    */

    console.log(items);

})();
