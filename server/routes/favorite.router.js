const express = require('express');
const pool = require('../modules/pool');
// const elementList = [];

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  let sqlCmd = `SELECT * FROM favorites`
  pool.query( sqlCmd ).then( ( results )=>{
    res.send( results.rows );
  }).catch( ( error )=>{
    console.log( 'error getting favorite gifs:', error );
    
    res.sendStatus(500);
  })
  
});

// add a new favorite
router.post('/', (req, res) => {
  
  const newFav = req.body;

  console.log('newFav obj', newFav);
  console.log(req.body.favorite);

  const sqlQuery = `INSERT INTO "favorites"("url", "favorite") VALUES ( $1, $2 )`

  pool.query(sqlQuery, [ newFav.url, newFav.favorite ]).then((result) => {
    console.log('In POST sending:', result);

    res.sendStatus(200);
  }).catch((error) => {
    console.log('error in POST', error);

    res.sendStatus(500);
  })

  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
