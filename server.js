require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const cors = require('cors');
app.use(cors()); // Allow all origins by default
const PORT = process.env.PORT || 5000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_API_URL = 'https://api.themoviedb.org/3';

// Route to get movie by ID
app.get('/movie/:id', async (req, res) => {
    const movieId = req.params.id;
    try {
        const response = await axios.get(`${TMDB_API_URL}/movie/${movieId}`, {
            params: { api_key: TMDB_API_KEY, language: 'en-US' }
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch movie details' });
    }
});

// Route to search for movies
app.get('/search', async (req, res) => {
    const query = req.query.query;
    try {
        const response = await axios.get(`${TMDB_API_URL}/search/movie`, {
            params: { api_key: TMDB_API_KEY, query, language: 'en-US' }
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to search movies' });
    }
});

// Route to get popular movies
app.get('/popular', async (req, res) => {
    try {
        const response = await axios.get(`${TMDB_API_URL}/movie/popular`, {
            params: { api_key: TMDB_API_KEY, language: 'en-US' }
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch popular movies' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${5000}`);
});
