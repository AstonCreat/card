$(document).ready(function() {
    $(".circle-intenal").hide();
    $(".circle-plus").click(function() {
        $(".circle-intenal").toggle(500);
    });
});