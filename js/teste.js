$(document).ready(function() {


    $(".circle-intenal").hide();
    $("#filtar").hide();
    $("#pesquisa").hide();

    $(".circle-plus").click(function() {
        $(".circle-intenal").toggle(500);
    });

    $("#clickFiltrar").click(function() {
        $("#pesquisa").slideUp(300, function() {
            $("#filtar").slideToggle(500);
        });
    })

    $("#clickCategoria").click(function() {
        $("#filtar").slideUp(300, function() {
            $("#pesquisa").slideToggle(500);
        });
    })

    $("#requestPsw").click(function() {
        $("#login").modal('hide');
    })

    $("#chat").click(function() {
        confirm("Sua mensagem será visualizada quando vendedor estiver online.");
    })


});