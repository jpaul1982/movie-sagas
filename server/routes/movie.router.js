const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM movies ORDER BY "title"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});



router.put('/', (req, res) => {
    console.log("route hit", req.body);
    const queryText = `UPDATE "movies" SET "title"= $2, "description"= $3 WHERE "id"=$1`;
    const queryValues = [req.body.id, req.body.title, req.body.description];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); 
        console.log("this worked!");
        })
        .catch((err) => {
            console.log('Error completing UPDATE movie query', err);
            res.sendStatus(500)
        });
});

router.get('/genre', (req, res) => {
    console.log("route hit at 12thirty", req.query);
    const queryText = `SELECT  
    "genres"."name", "movies"."title"
     FROM "movies"
     JOIN "movies_genres"
     ON "movies_genres"."movies_id"="movies"."id"
     JOIN "genres"
     ON "genres"."id"="movies_genres"."genres_id"
     WHERE "movies_genres"."movies_id"=$1`;
     pool.query(queryText, [req.query.id])
     .then((result) => { res.send(result.rows); })
    .catch((err) => {
        console.log('Error completing SELECT genre query', err);
        res.sendStatus(500);
    });
});




module.exports = router;

