
// Put your prediction endpoint here
const PREDICTIONS_URL = "None"


var search = function() {
    var searchText = $('#searchInput').val();

    $.ajax(PREDICTIONS_URL + "?filePath=images/" + searchText, {
        method: "GET",
    })
    .done(function(data) {
        $('#searchResults').text(data)
    })
    .fail(function(err) {
        $('#searchResults').text("Error while searching for image predictions. Maybe You forgot to change the prediction URL? ")
    })

}