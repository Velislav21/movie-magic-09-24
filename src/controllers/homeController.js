import express from 'express';
// import { Router }

const router = express.Router();

const movies = [
    {
        id: "1",
        name: "Jungle Cuise",
        imageUrl: "/img/jungle-cruise.jpeg",
        genre: "Adventure",
        description: 'Descrppt'
    },
    {
        id: "2",
        name: "The Little Mermaid",
        imageUrl: "/img/the-little-mermaid.jpg",
        genre: "Fantasy",
        description: 'Descrppt12'
    },
    {
        id: "3",
        name: "Home Alone",
        imageUrl: "/img/home-alone.jpeg",
        genre: "Comedy",
        description: 'Descrpp1212t'
    }
]

router.get('/', (req, res) => {
    res.render('home', { movies })
})
router.get('/about', (req, res) => {
    res.render('home/about')
})

export default router;