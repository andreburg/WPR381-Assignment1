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
    const credentials = SpotifyApi.withUserAuthorization();
    const api = SpotifyApi.withClientCredentials(
        "your-client-id",
        "your-client-secret"
    );

    //const items = await api.search("Bones", ["track"]);
    const items = await api.search("Bones", ["artist"]);
    //const items = await items api.song()
    printArtists(items);
    
    

    //console.log(items);

})();
