$(document).ready(function() {
    $(".circle-intenal").hide();
    $("#filtar").hide();
    $("#pesquisa").hide();

    $(".circle-plus").click(function() {
        $(".circle-intenal").toggle(500);
    });

    $("#clickFiltrar").click(function() {
        $("#filtar").toggle(500);
    })
    $("#clickCategoria").click(function() {
        $("#pesquisa").toggle(500);
    })
});