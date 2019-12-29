const express =  require('express');

const app = express();

app.get('/', function(req, res){ // request and response as parameters
res.send('Is it a good idea!'); // we are taking the response and calling a function called send which will send something to the browser

});

app.listen(3000, function(){
    console.log('Server started on port 3000....');
});




var routes = require('./api/Routes.js'); // Importing route
routes(app); // Register the route
