const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';

router.get('/movies', async (req, res) => {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`);
  res.json(movies.json());
});

router.get('/tv-series', async (req, res) => {
  const tvSeries = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}`);
  res.json(tvSeries.json());
});

router.get('/movie/:id', async (req, res) => {
  const movieId = req.params.id;
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`);
  res.json(movie.json());
});

router.get('/tv-series/:id', async (req, res) => {
  const tvSeriesId = req.params.id;
  const tv
