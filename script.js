console.log("Welcome to The Ultimate jQuery Course!🚀");

// make sure our DOM is fully loaded
$(document).ready(function() {
// or
/* $("#third").hide(); */
    $("#btn_hide").click(function() {
        $(".box").animate({
            width: "+=200px",
            height: "200px",
            fontSize: "20px",
        });
    });
    /* event.which shows what number of the button that was clicked*/
    $("body").keydown(function(event) {
        if(event.which === 72) {
            $(".second").hide();;
            // press H to hide it
        }
        if(event.which === 83) {
            $(".second").show()
            // press S to be visible
        }
    });
});