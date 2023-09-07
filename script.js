console.log("Welcome to The Ultimate jQuery Course!🚀");

// make sure our DOM is fully loaded
$(document).ready(function() {
    $('input').focus(function() {
        $(this).css("background-color", "tomato");
    })
    
    $('input').blur(function() {
        $(this).css("background-color", "");
    })
    
    $('input').change(function() {
        console.log($(this).val());
    })

    $("#registration_form").submit(function() {
        console.log("Form successfully submit!");
    })
});