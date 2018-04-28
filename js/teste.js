$(document).ready(function() {
    $(".circle-intenal").hide();
    $("#filtar").hide();
    $("#pesquisa").hide();

    $(".circle-plus").click(function() {
        $(".circle-intenal").toggle(500);
    });

    $("#clickFiltrar").click(function() {
        $("#pesquisa").hide(300);
        $("#filtar").toggle(500);
    })
    $("#clickCategoria").click(function() {
        $("#filtar").hide(300);
        $("#pesquisa").toggle(500);
    })

    $("#chat").click(function() {
        confirm("Sua mensagem será visualizada quando vendenor estiver online.");
    })
});