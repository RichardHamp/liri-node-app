//Requirements & Variables
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var request = require('request');
var keys = require("./keys.js");
const fs = require('fs');
input = process.argv.slice(3).join(" ");
var spotify = new Spotify(keys.spotify);
var lbreak = ("  \n********************************\n ");

//Switch between different operations
switch (process.argv[2]) {
    case "concert-this": concert(input); break;
    case "spotify-this-song": spotifySong(input); break;
    case "movie-this": movies(input); break;
    case "do-what-it-says": random(); break;
    default: console.log("Sorry, that expression isn't understood. Please use one of the four specified operations.");
}

//Outputs data to log.txt
function output(i) {
    fs.appendFile('log.txt', (i), function (err) {
        if (err) throw err;
    });
}

// CONCERT-THIS Operation
function concert(input) {
    if (!input) {
        input = "The Wiggles";
    }
    var concertResults = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    axios.get(concertResults)
        .then(
            function (response) {
                var concertData = response.data;
                console.log("   ");
                console.log("*****  Here are the dates and locations for the band " + input + "  *****");
                var func = "\n\n\n-------------------------------------\nCommand: concert-this\nBand Searched: " + input
                output(func);
                if (concertData.length > 5) {
                    newData = concertData.slice(0,5);
                }else{newData=concertData};
                for (var i = 0; i < newData.length; i++) {
                    var datetime = newData[i].datetime;
                    var dateArr = datetime.split("T");
                    var results =
                        lbreak +
                        i +
                        "\nVenue Name: " + newData[i].venue.name +
                        "\nVenue Location: " + newData[i].venue.city + ", " + newData[i].venue.region +
                        "\nDate of Event: " + moment(dateArr[0], "YYYY-MM-DD").format("MM/DD/YYYY");
                    console.log(results);
                    output(results);
                }
                console.log(lbreak);
            }
        )
}

// MOVIE-THIS
function movies(input) {
    if (!input) {
        input = "Mr. Nobody";
    }
    var movieResults = "https://omdbapi.com/?apikey=7fb908b7&t=" + input;
    axios.get(movieResults)
        .then(
            function (response) {
                var movieData = (response.data);
                var func = "\n\n\n-------------------------------------\nCommand: movie-this\n";
                output(func) +
                    console.log("   ");
                console.log("*****  Here is the data for the movie " + input + "  *****");
                var results =
                    "\nTitle: " + movieData.Title +
                    "\nYear: " + movieData.Year +
                    "\nIMDB Rating: " + movieData.imdbRating +
                    "\nRotten Tomatoes Rating: " + movieData.Ratings[1].Value +
                    "\nCountry Where Produced: " + movieData.Country +
                    "\nLanguage: " + movieData.Language +
                    "\nPlot: " + movieData.Plot +
                    "\nActors: " + movieData.Actors;
                output(results);
                console.log(results);
                console.log(lbreak)
            })
}

//SPOTIFY-THIS-SONG
function spotifySong(input) {
    if (!input) {
        input = "The Sign Ace of Base";
    }
    var client_id = 'CLIENT_ID'; // Your client id
    var client_secret = 'CLIENT_SECRET'; // Your secret
    // Authorization Request
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };
    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            //Token Usage
            var token = body.access_token;
            var options = {
                url: 'https://api.spotify.com/v1/users/jmperezperez',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };
            request.get(options, function (error, response, body) {
                console.log(body);
            });
        }
    });
    spotify.search(
        {
            type: "track",
            query: input
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;
            var func = "\n\n\n-------------------------------------\nCommand: spotify-this-song\n";
            output(func) +
                console.log("   ");
            console.log("*****  Here is the data for the song " + input + "  *****");
            for (i = 0; i < 5; i++) {

                var results =
                    i +
                    "\nartist(s): " + songs[i].album.artists[0].name +
                    "\nsong name: " + songs[i].name +
                    "\npreview song: " + songs[i].preview_url +
                    "\nalbum: " + songs[i].album.name +
                    lbreak;
                console.log(results);
                output(results);
            }
        }
    );
};

//DO-WHAT-IT-SAYS
function random() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            var random = data.split(",");
            var input = (random[0]);
            var j = random[1];
            var func = "\n\n\n-------------------------------------\nCommand: do-what-it-says\n";;
            output(func);
            switch (input) {
                case "concert-this": concert(j); break;
                case "spotify-this-song": spotifySong(j); break;
                case "movie-this": movies(j); break;
                case "do-what-it-says": random(); break;
                default: console.log("Sorry, that expression isn't understood.");
            }
        }
    })
}
