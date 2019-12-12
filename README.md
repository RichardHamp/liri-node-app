# Liri: Node App

L.I.R.I. (Language Interpretation and Recognition Interface) is a node-based app that takes in user-inputed parameters--movies, musical artists, and songs--on the command line and gives back data based on those parameters.

## Using the App:
You will need to clone this repot onto your local drive in order to utilize this app. From there you will need to install the required packages. After that, you may then run the following commands in your terminal/bash prompt in following form:

```
node liri.js parameter1 parameter2
```

parameter1 options are "concert-this", "spotify-this-song", "movie-this", or "do-what-it-says"

parameter2 depends on parameter1 and will be futher explained with an example under each heading.

### concert-this:

This command searches for upcoming concerts featuring the artist entered using Bands in Town API. It renders the following information about each event:

**Name of venue
**Venue location (city and state)
**Date of event

```
ex: node liri.js concert-this The Wiggles
```

### spotify-this-song:

This command searches the Spotify API for informationa about the song entered, listing up to ten examples for the song searched. It will return the following information in the terminal for each example:

**Artist(s)**

**Song's name**

**Preview link from Spotify**

**Album containing the song**

```
ex: node liri.js spotify-this-song Kiss Me
```

### movie-this:

When a user inputs a movie title after the "movie-this" command, LIRI will output the following movie information to the terminal:

**Title**

**Year**

**IMDB Rating**

**Rotten Tomatoes Rating**

**Country where the movie was produced**

**Language**

**Plot**

**List of Actors**

```
ex: node liri.js movie-this Zardoz
```

### do-what-it-says:

LIRI will use the text from “random.txt” in order to call LIRI’s commands. Currently, random.txt is formatted to call spotify-this-song with a second parameter of “I Want it That Way”.
```
ex: node liri.js do-what-it-says
```

### Technologies used:
- OMDB API
- Spotify API
- Bands In Town API
- Node.js
- NPM Packages
- Javascript


