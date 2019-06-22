const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const movieRouter= require('./routes/movie.router');
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movies', movieRouter);
// app.get('/api/genres/details', (req, res) => {
//     console.log(req.query);
//     const queryText = `SELECT 
//     "movies"."title", "genres"."name"
//      FROM "movies"
//      JOIN "movies_genres"
//      ON "movies_genres"."movies_id"="movies"."id"
//      JOIN "genres"
//      ON "genres"."id"="movies_genres"."genres_id"
//      WHERE "movies_genres"."movies_id"=$1`;
//      pool.query(queryText, req.params.id)
//      .then((result) => { res.send(result.rows); })
//     .catch((err) => {
//         console.log('Error completing SELECT genre query', err);
//         res.sendStatus(500);
//     });
// });
    


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});