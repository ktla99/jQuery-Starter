console.log("Welcome to The Ultimate jQuery Course!🚀");

// make sure our DOM is fully loaded
$(document).ready(function() {
    $('#output').load("sample.txt", function(response,
    statusTxt, xhr) {
        console.log(response);
        console.log(statusTxt);
        console.log(xhr);
    })
});