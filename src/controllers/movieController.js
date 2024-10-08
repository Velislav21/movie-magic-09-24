import { Router } from "express";
import movieServices from "../services/movieServices.js";

const router = Router();

function toArray(documents) {
    return documents.map(document => document.toObject());
}
// URL -> /movies/create
router.get('/create', (req, res) => {
    res.render('movies/create')
})

router.post('/create', async (req, res) => {
    const movieData = req.body;

    await movieServices.create(movieData)

    res.redirect('/')
})

router.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieServices.getAll(filter);
    res.render('home', { isSearch: true, movies: toArray(movies), filter })
})

router.get('/:movieId/details', async (req, res) => {

    const movieId = req.params.movieId
    const movie = await movieServices.getOne(movieId);

    movie.rating = getRatingView(movie.rating)
    res.render('movies/details', { movie })
})

router.get('/:movieId/attach', (req, res) => {
    res.render('movies/attach')
})


function getRatingView(rating) {
    if (!Number.isInteger(rating)) {
        return 'n\\a'
    }
    return '&#x2605;'.repeat(rating)
}
export default router;