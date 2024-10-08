import { Router } from "express";
import movieServices from "../services/movieServices.js";
import castService from "../services/castService.js";

const router = Router();

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

    const movies = await movieServices.getAll(filter).lean();

    res.render('home', { isSearch: true, movies, filter })
})

router.get('/:movieId/details', async (req, res) => {

    const movieId = req.params.movieId
    const movie = await movieServices.getOne(movieId).lean();

    res.render('movies/details', { movie })
})

router.get('/:movieId/attach', async (req, res) => {
    const movie = await movieServices.getOne(req.params.movieId).lean();
    const casts = await castService.getAllWithout(movie.casts).lean();

    res.render('movies/attach', { movie, casts });
})
router.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    const character = req.body.character;

    await movieService.attach(movieId, castId, character);

    res.redirect(`/movies/${movieId}/details`);
});
export default router;