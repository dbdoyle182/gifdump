// Variable with initial array of buttons

var animals = [
    "cats",
    "dogs",
    "hamsters",
    "goats",
];
// Global variables
var apiKey = "uPrOVK7ybDvGLsxThR99fXbZBXD9evJp";


// The function that renders the buttons onto the page

function renderBtns() {
// Clears buttons so that are no repeats
    $("#btnPlace").empty();
// Creates the buttons using a for loop that loops through the animal array
    
    for (var i = 0; i < animals.length; i++) {
        var animalBtn = $("<button>");
        animalBtn.addClass("animalBtn");
        animalBtn.attr("data-name", animals[i]);
        animalBtn.text(animals[i]);

// Appends button to the div with the proper id

    $("#btnPlace").append(animalBtn);
    };
};


// Event that listen for user input and then pushes it into a button
$("#add-animal").on("click", function(event) {
    // Prevents the page from refreshing
    event.preventDefault();

    // Variable to hold the user input
    var newAnimal = $("#animal-name").val().trim();
    // Pushes new animal into the previous array
    animals.push(newAnimal);

    // Runs the button create function to render the html with the new button
    renderBtns();
});
    
// This renders the HTML to display the gifs

function displayGifs() {

    var searchTerm = $(this).data("name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=10" + "&api_key=" + apiKey

// Creating an AJAX call for the specific button click
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL)
        console.log(response)
        var results = response.data;
    // For loop going through the results array and picking out individual gifs
        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div class=animalDiv>")
            var animalImg = $("<img>");
            var animalRt = $("<p>");
            animalRt.text("Rating: " + results[i].rating);
            animalImg.attr({"src":results[i].images.fixed_height_still.url,
            "data-animate":results[i].images.fixed_height.url,
            "data-still":results[i].images.fixed_height.url,
            "data-state":"still"});
            animalImg.addClass("animate-animal")
            animalImg.css({"height":"200px","width":"200px"})
            // Adding gifs to the html
            animalDiv.append(animalRt);
            animalDiv.append(animalImg);
            $("#animal-gif").prepend(animalDiv);
        };

    });
    
};

function animationStation () {

}

$(function(){

renderBtns();

$(document).on("click", ".animalBtn", displayGifs);


})



