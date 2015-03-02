window.onload = function(){

    var canplay;
    var player = document.getElementById('player');
    var iniciar = document.getElementById('iniciar');
    var pausa = document.getElementById('pausa');
    var parar = document.getElementById('parar');
    var avanzar = document.getElementById('avanzar');
    var retroceder = document.getElementById('retroceder');
    var inicio = document.getElementById('inicio');
    var fin = document.getElementById('fin');
    var pantallacompleta = document.getElementById('pantallacompleta');
    var volumen = document.getElementById('volumen');
    var progress = document.getElementById('progress');
    var rango = document.getElementById('range');


    
    var IcanPlay = function(){
        canplay = true;
        player.preload = 'auto';  
        volumen.value = player.volume * 100;
        progress.value = 0;

    };

    var PlayPause = function(){
        if (player.play){
            player.pause();
        }
        else{
            player.play();
        }

    };

    var play = function(){
        if (canplay) {
            console.log('canplay y play()');
            player.play();
        }
    };

    var pause = function(){
        if (canplay) {
            console.log('canplay y pause()');
            player.pause();
        }
    };

    var stop = function(){
        if (canplay) {
            console.log('canplay y stop()');
            player.pause();
            player.currentTime = 0;
        }
    };

    var avance = function(){
        if (canplay) {
            console.log('currentTime: ' + player.currentTime);
            player.currentTime += 10;
        }
    };

    var retroceso = function(){
        if (canplay) {
            console.log('currentTime: ' + player.currentTime);
            player.currentTime -= 10;
        }
    };

    var start = function(){
        if (canplay) {
            console.log('currentTime: ' + player.currentTime);
            player.currentTime = 0;
            console.log('currentTime: ' + player.currentTime);
        }
    };

    var end = function(){
        if (canplay) {
            player.currentTime = player.duration;
        }
    };

    var updateFn = function(){
        progress.value = (player.currentTime / player.duration) * 100;
    };

    var volumenFn = function(){
        if(canplay){
            player.volume = this.value/100;
        }
    };

    
    if(player){
        player.addEventListener('canplay', IcanPlay, false);
    }

    if(player){
        player.addEventListener('click', PlayPause, false);
    }

    if(player){
        player.addEventListener('timeupdate', updateFn, false);
    }
    
    if (iniciar){
        iniciar.addEventListener('click', play, false);
    }

    if (pausa){
        pausa.addEventListener('click', pause, false);
    }

    if (parar){
        parar.addEventListener('click', stop, false);
    }

    if (avanzar){
        avanzar.addEventListener('click', avance, false);
    }

    if (retroceder){
        retroceder.addEventListener('click', retroceso, false);
    }

    if (inicio){
        inicio.addEventListener('click', start, false);
    }

    if (fin){
        fin.addEventListener('click', end, false);
    }

    if (rango){
        rango.addEventListener('change', volumenFn, false);
    }
    
};