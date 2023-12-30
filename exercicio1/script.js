/* A declaração do JQuery é: $(<nome_do_elemento>) */
$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(params) {
        params.preventDefault();
        const urlNovaImg = $('#url-nova-imagem').val();
        console.log(urlNovaImg);
        const novaImagem = $('<li style="display: none;"></li>');
        $(`<img src="${urlNovaImg}" />`).appendTo(novaImagem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${urlNovaImg}" target="_blank" title="Ver imagem em tamaho original.">
                Ver imagem em tamanho original</a>
        </div>
        `).appendTo(novaImagem);
        $(novaImagem).appendTo('ul');
        $(novaImagem).fadeIn(1000);
        $('#url-nova-imagem').val('');
    });
});

