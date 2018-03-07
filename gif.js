var videoGames = [
    "Call of Duty",
    "Legend of Zelda",
    "Super Mario Odyssessy",
    "Halo",
    "Destiny 2",
    "Pokemon",
    "NBA 2k18",
    "Overwatch"
];

// var queryURL = "Place giphy api query in here"
var btnCreate = function() {
    $("#btnPlace").empty();
    for (var i = 0; i < videoGames.length; i++) {
        var gameBtn = $("<button>");
        gameBtn.addClass("gif-btn");
        gameBtn.attr("data-name", videoGames[i]);
        gameBtn.text(videoGames[i]);
        $("#btnPlace").append(gameBtn);
    };
}
var searchGiphy = function() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(){})
};



$(function(){


btnCreate();
})