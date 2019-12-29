var unirest = require('unirest');

var req = unirest("GET", "https://google-search1.p.rapidapi.com/google-search");

req.query({
	"q": "Avengers%2BEndgame",
	"hl": "en",
	"gl": "us"
});

req.headers({
	"host": "google-search1.p.rapidapi.com",
	"api-key": "dcb73a8745msh130fa3e0d9691c5p130fc6jsn3be9233b9b42"
});


req.end(function (res) {
	if (res.error) throw new Error('Error');

	console.log(res.body);
});

module.exports = function(app) {
    
  
    // Users Routes
    unirest.post('https://google-search1.p.rapidapi.com/google-search')
    .headers({'host': "google-search1.p.rapidapi.com", 'api-key': "dcb73a8745msh130fa3e0d9691c5p130fc6jsn3be9233b9b42" })
    .send({ "q": "Avengers%2BEndgame", "hl": "en","gl": "us" })
    .then((response) => {
    console.log(response.body)
  })

    
  };