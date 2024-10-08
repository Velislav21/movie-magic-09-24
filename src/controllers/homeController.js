import express from 'express';
// import { Router }
import movieServices from '../services/movieServices.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await movieServices.getAll().lean();

    res.render('home', { movies })
})

router.get('/about', (req, res) => {
    res.render('home/about')
})

export default router;