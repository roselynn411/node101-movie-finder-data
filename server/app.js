//import express , morgan and axios 
const express = require ('express');
const morgan = require ('morgan');
const axios = require ('axios');

// import .env file so you can save api key
require('dotenv').config();  


//use env in my code
const API= process.env.API_KEY
const url = 'http://www.omdbapi.com'
const app = express();


//server should log each request using morgan's dev format. Applying middleware
app.use(morgan('dev'));

// establishing a cache object 
let cache = {}

// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter
app.get('/', function (req,res){
  let movieQuery = req.url ;
  let getUrl = `${url}${req.url}&apikey=${API}`
  console.log(getUrl)

app.get('/', (req, res) => {
  console.log('this is my get url ', getUrl);
    if(cache[movieQuery]) {
      res.send(cache[movieQuery])
      console.log('if cache works ' )
    } else {
      axios.get(getUrl)
        .then((response) => {
          cache = response.data;
          res.send(response.data);
          console.log(Object.keys(cache), "Keys in cache after the last request.");
        })
        .catch((err) => {
          res.send(console.log(err, 'Error!'))
        })
    }
  });
});

module.exports = app;


reverseString('code')