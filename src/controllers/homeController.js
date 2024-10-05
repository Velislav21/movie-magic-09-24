import express from 'express';
// import { Router }
import movieServices from '../services/movieServices.js';

const router = express.Router();

router.get('/', (req, res) => {
    const movies = movieServices.getAll();
    res.render('home', { movies })
})
router.get('/about', (req, res) => {
    res.render('home/about')
})

export default router;