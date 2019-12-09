# Liri: Node App

L.I.R.I. is Language Interpretation and Recognition Interface. LIRI is a node-based app that takes in user-inputed parameters--movies, musical artists, and songs--on the command line and gives back data based on those parameters.

# Using the App:
You will need to clone this repot onto your local drive in order to utilize this app. From there you will need to install the required packages. After that, you may then run the following commands in your terminal/bash prompt in following form:

node liri.js parameter1 parameter2

parameter1 can be "concert-this", "spotify-this-song", "movie-this", or "do-what-it-says"

parameter2 depends on parameter1 and will be futher explained under each heading.

<h2>concert-this:</h2>

This command searches for upcoming concerts featuring the artist entered using Bands in Town API. It renders the following information about each event:

Name of venue
Venue location (city and state)
Date of event

<h2>spotify-this-song:</h2>

This command searches the Spotify API for informationa about the song entered. It will return the following information in the terminal:

Artist(s)
Song's name
Preview link from Spotify
Album containing the song

<h2>movie-this:</h2>

When a user inputs a movie title after the "movie-this" command, LIRI will output the following movie information to the terminal:

Title
Year
IMDB Rating
Rotten Tomatoes Rating
Country where the movie was produced
Language
Plot
List of Actors

<h2>do-what-it-says:</h2>

LIRI will use the text from “random.txt” and call one of LIRI’s commands. It should run Spotify-this-song for “I want it That way”.

Technologies used:
- OMDB API
- Spotify API
- Bands In Town API
- Node.js
- NPM Packages
- Javascript