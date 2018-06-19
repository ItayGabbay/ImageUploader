
// Put your prediction endpoint here
const PREDICTIONS_URL = "Enter Your Endpoint Here"


var search = function() {
    var searchText = $('#searchInput').val();

    $.ajax(PREDICTIONS_URL + "?filePath=images/" + searchText, {
        method: "GET",
    })
    .done(function(data) {
        $('#searchResults').text(data)
    })
    .fail(function(err) {
        $('#searchResults').text("Error while detection. Maybe You forgot to change the detection URL? ;)")
    })

}