import express from 'express';
// import { Router }

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/about', (req, res) => {
    res.render('home/about')
})

export default router;