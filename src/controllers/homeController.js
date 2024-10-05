import express from 'express';
// import { Router }

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/test', (req, res) => {
    res.send('test')
})

export default router;