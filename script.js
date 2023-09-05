console.log("Welcome to The Ultimate jQuery Course!🚀");

/* $("#third").hide(); */

/*
$("#btn_hide").click(function() {
    $(".second").hide();
})
*/


/* event.which shows what number of the button that was clicked*/

$("body").keydown(function(event) {
    if(event.which === 72) {
        $(".second").toggle(2000, function() {
            console.log("Task Completed!");
        })
        // press H to hide it
    }
    if(event.which === 83) {
        $(".second").show()
        // press S to be visible
    }
});
