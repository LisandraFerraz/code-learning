
// 1 mundo

jQuery("#exec").click(function(){

    // FASE 1
    if($ ('.frenteF1').is(':checked') && $('.andar5F1').is(':checked')){

        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(
            5000);

        for (var i = 0; i < 4; i++){
            $('.proxFase').css("box-shadow", "1px 1px 3px aquamarine").fadeOut(100);
            $('.proxFase').css("box-shadow", "1px 1px 10px aquamarine").fadeIn(300);
        }

    }
    // apresenta msg de erro e pisca o botão de resetar
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    
        for (var i = 0; i < 4; i++){
            $('.btn-tentarNov').css("box-shadow", "1px 1px 3px red").fadeOut(200);
            $('.btn-tentarNov').css("box-shadow", "1px 1px 10px red").fadeIn(300);
        }

        // retira a sombra vermelha do botão
        jQuery("#resetar").click(function(){ 
            $('.btn-tentarNov').css("box-shadow", "3px 3px 3px transparent");
            
        });
    }

    // FASE 2
    if($('.esquerda1F2').is(':checked') && $('.andar4F2').is(':checked')
    && $('.andar8F2').is(':checked')
    && $('.frente2F2').is(':checked') && $('.andar12F2').is(':checked')
    && $('.esquerda3F2').is(':checked') && $('.andar16F2').is(':checked')){

        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(
            5000);

        for (var i = 0; i < 4; i++){
            $('.proxFase').css("box-shadow", "1px 1px 3px aquamarine").fadeOut(100);
            $('.proxFase').css("box-shadow", "1px 1px 10px aquamarine").fadeIn(300);
        }
    }

    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    
        for (var i = 0; i < 4; i++){
            $('.btn-tentarNov').css("box-shadow", "1px 1px 3px red").fadeOut(200);
            $('.btn-tentarNov').css("box-shadow", "1px 1px 10px red").fadeIn(300);
        }

        jQuery("#resetar").click(function(){ 
            $('.btn-tentarNov').css("box-shadow", "3px 3px 3px transparent");
        });
    }

    // FASE 3










});
