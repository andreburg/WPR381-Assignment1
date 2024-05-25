/*
The program should make a request to the Spotify API, and fetch a JSON object that
includes the artist(s), song, preview link, and album.
*/
const { SpotifyApi } = require("@spotify/web-api-ts-sdk");

function printArtists(items)
{
    console.table(items.artists.items.map((item) => ({
        name: item.name,
        followers: item.followers.total,
        popularity: item.popularity,
    })));
}

(async () => {

    console.log(`Searching Spotify for song...`);

    const api = SpotifyApi.withClientCredentials(
        "d0a9cdda035a4a17bc8c1e1bd73fddff",
        "4d23968290e84ae584050a695c8fa90f"
    );

    //const items = await api.search("Bones", ["track"]);
    const items = await api.search("Bones", ["track"]);
    //const items = await items api.song()
    //printSearch(items);
    
    

    //console.log(items);

})();
