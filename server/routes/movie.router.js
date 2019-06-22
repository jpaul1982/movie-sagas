const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM movies';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM movies_genres';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    const queryText = `UPDATE "movies" SET "title"= $2, "description"= $3 WHERE "id"=$1`;
    const queryValues = [req.params.id, req.body.title, req.body.description];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing UPDATE movie query', err);
            res.sendStatus(500)
        });
});

module.exports = router;