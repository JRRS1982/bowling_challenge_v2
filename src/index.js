// loaded express into the project. 
const express = require('express');
//create the api as an express object. 
const api = express();
// static accepts a path with all files within the argument and creates a directory. INDEX.HTML LOCATION IS IMPORTANT. 
api.use(express.static(__dirname + '/public'));

//once the server is setup the callback function is going to log this string. 
api.listen(3000, () => {
  console.log("API is up and running")
});

// //get route - but is not needed as we are accessing the index.html file, which is accessible as the express.static method access it. 
// api.get('/', (req, res) => {
//   console.log(req)
//   res.send('Hello bob')
// });

api.post('/roll', (req, res) => {
  console.log('post request received')
});
