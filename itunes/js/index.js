// @ts-check
"use strict";

//iTunes Search API
//`entity=music` filters for just music tracks and music videos
//`term=...` is how you specify the search term
const SEARCH_API = "https://itunes.apple.com/search?entity=musicTrack&term="

//a few elements we will need to adjust often
const PROGRESS_BAR = document.querySelector(".progress");
const RESULTS_DIV = document.querySelector("#results");

//Audio object to play track previews
let preview = new Audio();

/**
 * FETCHING METHOD HERE!!
 * Handles responses from the fetch() API.
 * The iTunes API always returns JSON, even for
 * status codes >= 400.
 * @param {Response} response 
 */
function handleResponse(response) {
    console.log("response", response);
    if (response.ok) {
        return response.json();
    } else {
        //iTunes API errors are sent
        //as a JSON object containing
        //an `errorMessage` property
        return response.json()
            .then(function(err) {
                throw new Error(err.errorMessage);
            });
    }
}

/**
 * Handles errors that occur while fetching
 * @param {Error} err 
 */
function handleError(err) {
    console.error(err);
    alert(err);
}

/**
 * Renders the iTunes search API results
 * @param {Object} data 
 */
function renderResults(data) {
    //TODO: implement this
    console.log(data);
    RESULTS_DIV.textContent = ""; // refresh the results
    data.results.forEach(function(track) { // .results is an array containing tracks
        let img = document.createElement("img");
        img.src = track.artworkUrl100;
        img.alt = track.trackName;
        img.title = track.trackName; // hover over an element, this shows up in the browser

        RESULTS_DIV.appendChild(img); // add elements to the id "RESULTS_DIV"

        img.addEventListener("click", function() {
            // if they click on the same album artwork. You load the track's previewUrl to the preview src. So if the current preview src is equal to your new track's preview url, you clicked on the same album artwork
            if (preview.src === track.previewUrl) { // preview is a global variable
                if (preview.paused) {
                    preview.play();
                } else {
                    preview.pause();
                }
            } else {
                preview.src = track.previewUrl;
                preview.play();
            }
        });
    });
}

//TODO: listen for the "submit" event
//raised by the <form id="search-form">
//element, prevent the default behavior,
//and use fetch() to search iTunes for tracks
//matching the term the user entered in the
//<input> element within the form.

document.querySelector("#search-form")
    .addEventListener("submit", function(evt) { // evt is event object
        evt.preventDefault() // browser, don't handle the data. I'll do it myself
        
        // find the <input> element within the <form> element during an event listener function.
        // the keyword 'this' refers to the element that raised the event, which in this case is the <form> element
        let term =  this.querySelector("input").value; // string that the user put in the box
        console.log("search for %s", term);

        fetch(SEARCH_API + term) // global function, returns a promise
            .then(handleResponse) // call this function when the response comes back. handleResponse is "Did we get a 200 or error 400 response?""
            .then(renderResults)
            .catch(handleError);
    });