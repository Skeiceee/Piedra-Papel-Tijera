$(document).ready(function(){

function match(jugador){
    /** 
     * Empate = 0;
     * Gana Jugador = 1;
     * Gana Oponente = 2;
     */
    let oponente = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log((oponente === 1 ? 'Papel' : (oponente === 2 ? 'Piedra' : 'Tijera')));
    let res = 0;

    if (oponente !== jugador) {
        if (jugador === 1) {
            //Papel
            res = (oponente === 2 ? res =  1 : (oponente === 3 ? res = 2 : res = 0)); 
        }
        if (jugador === 2) {
            //Piedra
            res = (oponente === 3 ? res =  1 : (oponente === 1 ? res = 2 : res = 0));  
        }
        if (jugador === 3) {
            //Tijera
            res = (oponente === 1 ? res =  1 : (oponente === 2 ? res = 2 : res = 0));   
        }
    }
    
    drawResultado(res, jugador, oponente)

};

function drawResultado(res, jugador, oponente){
    container = $('#resultado');
    let img_jugador = $(document.createElement('img'));
    let img_oponente = $(document.createElement('img'));
    let img_versus = $(document.createElement('img'));
    let divMatch = $(document.createElement('div'));
    let spanMatch = $(document.createElement('span'));
    let div = $(document.createElement('div'))
    img_jugador.attr('src', './img/'+(jugador === 1 ? 'papel' : (jugador === 2 ? 'piedra' : 'tijera'))+'.png');
    img_jugador.addClass('zoomInLeft animated')
    img_oponente.attr('src', './img/'+(oponente === 1 ? 'papel' : (oponente === 2 ? 'piedra' : 'tijera'))+'.png');
    img_oponente.addClass('zoomInRight animated');
    img_versus.attr('src', './img/vs.png');
    img_versus.addClass('zoomInDown animated');
    spanMatch.attr('id', 'spanMatch');
    div.addClass('zoomInUp animated');

    divMatch.append(img_jugador);
    divMatch.append(img_versus);
    divMatch.append(img_oponente);
    if (res === 0) {
        spanMatch.text('Empate');
    } else if (res === 1){
        spanMatch.text('Ganaste');
    }else if(res === 2){
        spanMatch.text('Perdiste');
    }
    div.append(spanMatch);
    divMatch.append(div);
    container.html(divMatch);
};


$('#papel').click(function(){
    $('#img_papel').removeClass('zoomInLeft');
    $('#img_papel').removeClass().addClass('wobble animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
    $('#img_papel').attr('class','wobble animated');
    match(1);
})

$('#piedra').click(function(){
    $('#img_piedra').removeClass('zoomInLeft');
    $('#img_piedra').removeClass().addClass('wobble animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
    $('#img_piedra').attr('class','wobble animated');
    match(2);
})

$('#tijera').click(function(){
    $('#img_tijera').removeClass('zoomInLeft');
    $('#img_tijera').removeClass().addClass('wobble animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
    $('#img_tijera').attr('class','wobble animated');
    match(3);
})


});
