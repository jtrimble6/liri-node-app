require("dotenv").config();
var keys = require("./keys");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fs = require("fs");
// console.log(keys);


var action = process.argv[2];
var variable = process.argv[3];

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
// console.log(client);

switch (action) {
    case "my-tweets":
        tweets();
        break;

    case "spotify-this-song":
        spot();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        says();
        break;
}

function tweets() {
    

    client.get("statuses/user_timeline", {screen_name: "LIRIbottt", count: 20}, function(error, tweets, response) {
        if (!error) {
            // console.log(tweets);
            var myTweets = tweets.length;
            // console.log(myTweets);

            for (var i=0; i < myTweets; i++) {
                console.log(tweets[i].text);
            }
            
        } else {console.log(error);}
    });
    
        
}

function spot() {
    
    spotify.search({type: 'track', query: variable, limit: 1 }, function(err, data) {
        if (!err) {
            // console.log(data.tracks.items)
            var myTrack = data.tracks.items
                for (var i=0; i < myTrack.length; i++) {
    
                    var myName = myTrack[i].name
                    var myPreview = myTrack[i].preview_url
                    var myAlbum = myTrack[i]
                    for (var x=0; x < myAlbum.artists.length; x++) {
                        console.log(myAlbum.artists[x].name);
                    }
                    console.log(myName);
                    console.log(myPreview);
                    console.log(myAlbum.album.name);
                }

        } else {console.log(err);};
     });
}

function movie() {
    
    var queryURL = "http://www.omdbapi.com/?t=" + variable + "&apikey=e550edbe";

    console.log(queryURL);
        
    request(queryURL, function(error, response, body) {

        if (!error && response.statusCode === 200) {
            // console.log(JSON.parse(body));
            var myMovie = JSON.parse(body);
            console.log("Title: " + myMovie.Title);
            console.log("Year: " + myMovie.Year);
            console.log("IMDB rating: " + myMovie.imdbRating);
            console.log(myMovie.Ratings.length);
            //     for (var i=0; i < myMovie.Ratings.length; i++) {
            //         console.log(myMovie.Ratings[1]);
            //     }
            console.log("Country: " + myMovie.Country);
            console.log("Language: " + myMovie.Language);
            console.log("Plot: " + myMovie.Plot);
            console.log("Actors: " + myMovie.Actors);
        } else {console.log(error);}

    })
}

function says() {

    var spotify = new Spotify(keys.spotify);
    var client = new Twitter(keys.twitter);
    
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (!error) {
            console.log(data);
            
            splitString = data.split(',');

            var action = splitString[0];
            var variable = splitString[1];

            switch (action) {
                case "my-tweets":
                function tweets() {
    

                    client.get("statuses/user_timeline", {screen_name: "LIRIbottt", count: 20}, function(error, tweets, response) {
                        if (!error) {
                            // console.log(tweets);
                            var myTweets = tweets.length;
                            // console.log(myTweets);
                
                            for (var i=0; i < myTweets; i++) {
                                console.log(tweets[i].text);
                            }
                            
                        } else {console.log(error);}
                    });
                    
                        
                }
                tweets();
                break;
            
                case "spotify-this-song":
                function spot() {
    
                    spotify.search({type: 'track', query: variable, limit: 1 }, function(err, data) {
                        if (!err) {
                            // console.log(data.tracks.items)
                            var myTrack = data.tracks.items
                                for (var i=0; i < myTrack.length; i++) {
                    
                                    var myName = myTrack[i].name
                                    var myPreview = myTrack[i].preview_url
                                    var myAlbum = myTrack[i]
                                    for (var x=0; x < myAlbum.artists.length; x++) {
                                        console.log(myAlbum.artists[x].name);
                                    }
                                    console.log(myName);
                                    console.log(myPreview);
                                    console.log(myAlbum.album.name);
                                }
                
                        } else {console.log(err);};
                     });
                }
                spot();
                break;
            
                case "movie-this":
                function movie() {
    
                    var queryURL = "http://www.omdbapi.com/?t=" + variable + "&apikey=e550edbe";
                
                    console.log(queryURL);
                        
                    request(queryURL, function(error, response, body) {
                
                        if (!error && response.statusCode === 200) {
                            // console.log(JSON.parse(body));
                            var myMovie = JSON.parse(body);
                            console.log("Title: " + myMovie.Title);
                            console.log("Year: " + myMovie.Year);
                            console.log("IMDB rating: " + myMovie.imdbRating);
                            console.log(myMovie.Ratings.length);
                            //     for (var i=0; i < myMovie.Ratings.length; i++) {
                            //         console.log(myMovie.Ratings[1]);
                            //     }
                            console.log("Country: " + myMovie.Country);
                            console.log("Language: " + myMovie.Language);
                            console.log("Plot: " + myMovie.Plot);
                            console.log("Actors: " + myMovie.Actors);
                        } else {console.log(error);}
                
                    })
                }
                    movie();
                    break;
            
                case "do-what-it-says":
                    says();
                    break;
            }
            
        } else{console.log(error);}
    })
    
        
}