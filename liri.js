// require("dotenv").config();
// var keys=require("./keys.js");
// var axios = require("axios");
// var moment = require("moment");
// var keys = require("./keys.js");
// var multipleWordBand=[];
// var spotify=new spotify(keys.spotify);
// for (var i = 3; i< arg.length; i++) {
//     reference.push(arg[i])
// }
// var referenceBand = reference.join("");

switch(process.argv[2]) {
    case "concert-this":  concert(); break;
    case "spotify-this-song": console.log("Spotify something here"); break;
    case "movie-this": console.log("Movie something here"); break;
    case "do-what-it-says": console.log("Do something here"); break;
    default: console.log("Sorry, that expression isn't understood.");
}


//function concert
// console.log(process.argv.length)

//     for (var i = 3; i<process.argv.length; i++) {
//         j=(process.argv[i]);
//         multipleWordBand.push(j);
//         console.log(j);
//     }
//     console.log(multipleWordBand);
//     band = multipleWordBand.join("%20");
//     console.log(band);

// function concert() {
//     var concerts = "https://rest.bandsintown.com/artists/" +band+ "/events?app_id=codingbootcamp";
//     console.log(concerts)
//     axios.get(concerts)
//     .then(
//         function (response) {
//         console.log("   ");
//         console.log("*****  Here are the dates and locations for " +band+"  *****");
//     for (var i = 0; i<response.data.length; i++) {
//         var datetime = response.data[i].datetime;
//         var dateArr = datetime.split("T");
//         var results = 
//         "\n-------------------------------------\n" +
//         "\nVenue Name: " + response.data[i].venue.name +
//         "\nVenue Location: " + response.data[i].venue.city +", "+ response.data[i].venue.region +
//         "\nDate of Event: " + moment(dateArr[0], "YYYY-MM-DD").format("MM/DD/YYYY");
//         console.log(results);
//         }
//         console.log("  ");
//         console.log("********************************");
//         console.log("  ");
//     }
//     )
// }
// concert();