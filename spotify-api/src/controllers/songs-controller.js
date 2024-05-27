const spotifyApi = require('../lib/spotify-api');
const { Request, Response } = require('express');
const { getSpotifyToken } = require('../middleware/auth');
const { default: axios } = require('axios');


/**
 * Route returning album tracks related to a query parameter.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
// const getAlbumSongs = async (req, res) => {
//     try {
//         const { albumName, artistName } = req.query;
//         const searchQuery = `album:${albumName}`; // Constructing the search query
//         const searchResult = await spotifyApi.search(searchQuery, ['album']);
//         const albums = searchResult.albums.items; // Extract albums from the search result


//         console.log(albums)
//         // Assuming you want to get the tracks of the first album in the search results
//         const albumId = albums[0].id;
//         console.log(albumId);

//         const albumTracksResponse = await spotifyApi.search(albumId, ['track']);

//         res.status(200).json({
//             data: albumTracksResponse.items // Extract tracks from the albumTracksResponse
//         });
//     } catch (e) {
//         // Handle errors appropriately
//         res.status(500).json({
//             message: e.message
//         });
//     }
// };

const getAlbumSongs = async (req, res) => {
    console.log('Request Object:', req.params); // Log the params to debug

    const albumId = req.params.id; // Ensure this matches the request parameter
    if (!albumId) {
        return res.status(400).json({ error: 'Album ID is required' });
    }

    try {
        const token = await getSpotifyToken();
        console.log(token)
        const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        res.json(response.data);

        console.log(response.data);
    } catch (error) {
        console.error('Error fetching album songs:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getArtistSongs = async (req, res) => {
    console.log('Request Object:', req.params); // Log the params to debug

    const artistId = req.params.id; // Ensure this matches the request parameter
    if (!artistId) {
        return res.status(400).json({ error: 'Artist ID is required' });
    }

    try {
        const token = await getSpotifyToken();
        //console.log(token)
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        res.json(response.data);

        console.log(response.data);
    } catch (error) {
        console.error('Error fetching album songs:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getSong = async (req, res) => {
    console.log('Request Object:', req.params); // Log the params to debug

    const trackId = req.params.id; // Ensure this matches the request parameter
    if (!trackId) {
        return res.status(400).json({ error: 'Song ID is required' });
    }

    try {
        const token = await getSpotifyToken();
        console.log(token)
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        res.json(response.data);

        console.log(response.data);
    } catch (error) {
        console.error('Error fetching album songs:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = {
    getAlbumSongs,
    getArtistSongs,
    getSong
};
