console.log("Welcome to The Ultimate jQuery Course!🚀");

// make sure our DOM is fully loaded
$(document).ready(function() {
    $('input').focus(function() {
        $(this).css("background-color", "tomato")
    })
});