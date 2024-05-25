import express from 'express';

const app = express();
const PORT = 3000;

let views = 0;

// Endpoint za dobijanje broja pregleda
app.get('/views', (req, res) => {
    res.json({ views });
});

// Endpoint za prikaz stranice
app.get('/', (req, res) => {
    views++;
    res.send(`Welcome to the site! Total views: ${views}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
