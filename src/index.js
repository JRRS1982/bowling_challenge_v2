// loaded express into the project. 
const express = require('express');

//creating a variable called api
const api = express();

//once the server is setup the callback function is going to log this string. 
api.listen(3000, () => {
  console.log("API is up and running")
});

//route 1 
api.get('/', (request, response) => {
  console.log(request)
  response.send('Hello world')
});

