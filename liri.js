require("dotenv").config();
var keys=require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var multipleWordInput=[];
// var spotify=new spotify(keys.spotify);

switch(process.argv[2]) {
    case "concert-this":  concert(); break;
    case "spotify-this-song": console.log("Spotify something here"); break;
    case "movie-this": movies(); break;
    case "do-what-it-says": console.log("Do something here"); break;
    default: console.log("Sorry, that expression isn't understood.");
}

// CONCERT-THIS
function concert() {
for (var i = 3; i<process.argv.length; i++) {
        j=(process.argv[i]);
        multipleWordInput.push(j);
    }
    band = multipleWordInput.join("%20"); 
    var concertResults = "https://rest.bandsintown.com/artists/" +band+ "/events?app_id=codingbootcamp";
    axios.get(concertResults)
    .then(
        function (response) {
        console.log("   ");
        console.log("*****  Here are the dates and locations for " +band+"  *****");
    for (var i = 0; i<response.data.length; i++) {
        var datetime = response.data[i].datetime;
        var dateArr = datetime.split("T");
        var results = 
        "\n-------------------------------------\n" +
        "\nVenue Name: " + response.data[i].venue.name +
        "\nVenue Location: " + response.data[i].venue.city +", "+ response.data[i].venue.region +
        "\nDate of Event: " + moment(dateArr[0], "YYYY-MM-DD").format("MM/DD/YYYY");
        console.log(results);
        }
        console.log("  ");
        console.log("********************************");
        console.log("  ");
    }
    )
}

// MOVIE-THIS
function movies() {
    for (var i = 3; i<process.argv.length; i++) {
            j=(process.argv[i]);
            multipleWordInput.push(j);
        }
        movie = multipleWordInput.join("%20"); 
        var movieResults = "https://omdbapi.com/?apikey=7fb908b7&t=" + movie;
        axios.get(movieResults)
    .then(
        function (response) {
        var movieData=(response.data);
        console.log("   ");
        console.log("*****  Here is the data for " +movie+"  *****");
        var results = 
        "\n-------------------------------------\n" +
        "\nTitle: " + movieData.Title +
        "\nYear: " + movieData.Year +
        "\nIMDB Rating: " + movieData.imdbRating +
        "\nRotten Tomatoes Rating: " + movieData.Ratings[1].Value +
        "\nCountry Where Produced: " + movieData.Country +
        "\nLanguage: " + movieData.Language +
        "\nPlot: " + movieData.Plot +
        "\nActors: " + movieData.Actors;
        console.log(results);
        console.log("  ");
        console.log("********************************");
        console.log("  ");
        })
        
    }
 