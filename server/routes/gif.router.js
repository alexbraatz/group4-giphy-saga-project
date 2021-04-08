const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
//Allows us to access .env file
require('dotenv').config();


router.get( '/', ( req, res )=>{
  console.log( '/gifs GET' );
  // make an API call to giphy's server with our API key
  axios.get( `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=10` ).then( ( response )=>{
      res.send( response.data.data );
  }).catch( ( err )=>{
      console.log( err );
      res.send( 500 );
  })
})


module.exports = router;

/// [0].images.original.url