import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('ITS WORKINGGGGGGGG')
})
app.listen(5000, () => console.log('server is listening on http://localhost:5000'))