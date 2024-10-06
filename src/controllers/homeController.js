import express from 'express';
// import { Router }
import movieServices from '../services/movieServices.js';

const router = express.Router();

function toArray(documents) {
    return documents.map(document => document.toObject());
}

router.get('/', async (req, res) => {
    const movies = await movieServices.getAll();
    
    res.render('home', { movies: toArray(movies) })
})
router.get('/about', (req, res) => {
    res.render('home/about')
})

export default router;