require("dotenv").config();
var keys=require("./keys.js");
var spotify=require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
const fs = require('fs');
input=process.argv.slice(3).join(" ");

switch(process.argv[2]) {
    case "concert-this":  concert(input); break;
    case "spotify-this-song": spotifySong(input); break;
    case "movie-this": movies(input); break;
    case "do-what-it-says": random(); break;
    default: console.log("Sorry, that expression isn't understood.");
}

//outputs data to log.txt
function output(i){
    fs.appendFile('log.txt', (i), function (err) {
    if (err) throw err;
  });}

// CONCERT-THIS
function concert(input) {
    var concertResults = "https://rest.bandsintown.com/artists/" +input+ "/events?app_id=codingbootcamp";
    axios.get(concertResults)
    .then(
        function (response) {
        console.log("   ");
        console.log("*****  Here are the dates and locations for " +input+"  *****");
    for (var i = 0; i<response.data.length; i++) {
        var datetime = response.data[i].datetime;
        var dateArr = datetime.split("T");
        var results = 
        "\n-------------------------------------\n" +
        "\nVenue Name: " + response.data[i].venue.name +
        "\nVenue Location: " + response.data[i].venue.city +", "+ response.data[i].venue.region +
        "\nDate of Event: " + moment(dateArr[0], "YYYY-MM-DD").format("MM/DD/YYYY");
        console.log(results);
        var func="\n\n\n-------------------------------------\nCommand: concert-this\nBand Searched: "+input
        output(func);
        output(results);
        }
        console.log("  ");
        console.log("********************************");
        console.log("  ");
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
        var movieData=(response.data);
        console.log("   ");
        console.log("*****  Here is the data for " +input+"  *****");
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
        var func="\n\n\n-------------------------------------\nCommand: movie-this\nTitle Searched: "+movieData.Title;
        output(func);
        output(results);
        console.log(results);
        console.log("  ");
        console.log("********************************");
        console.log("  ");
        })
        
    }

//SPOTIFY-THIS
function spotifySong (songName) {
    var spotify=new spotify(keys.spotify);
    // console.log(spotify);
    if(!songName) {
        songName = "Kiss Me";
    };

// for (var i = 3; i<process.argv.length; i++) {
//     j=(process.argv[i]);
//     multipleWordInput.push(j);
// }
// songName=multipleWordInput;
// console.log("1");
// console.log(songName);
// console.log("2");
//     if (songName === undefined) {
//         songName = "What's my age again";
//     }
//     spotify.search(
//         {
//             type: "track",
//             query: "kiss me"
//         },
//         function (err, data) {
//             if (err) {
//                 console.log("Error occurred: " + err);
//                 return;
//             }

//             var songs = data.tracks.items;

//             for (var i = 0; i < songs.length; i++) {
//                 console.log(i);
//                 console.log("artist(s): " + songs[i].artists.map(getArtistNames));
//                 console.log("song name: " + songs[i].name);
//                 console.log("preview song: " + songs[i].preview_url);
//                 console.log("album: " + songs[i].album.name);
//                 console.log("-----------------------------------");
//             }
//         }
//     );
};
 
//DO-WHAT-IT-SAYS
function random() {
fs.readFile("random.txt", "utf8", function (error, data) {
    if(error) {
        return console.log(error);
    }else{
        var random=data.split(",");
        var input =(random[0]);
        var j = random[1];
        switch(input) {
            case "concert-this":  concert(j); break;
            case "spotify-this-song": spotifySong(j); break;
            case "movie-this": movies(j); break;
            case "do-what-it-says": random(); break;
            default: console.log("Sorry, that expression isn't understood.");
        }
    }
})
}