$(function () {
    "use strict";

    // Obtener los elementos del DOM
    var status = document.getElementById('status'),
         input = document.getElementById('input'),
         content = $('#content');

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;
    //open true if socket open
    var ok = false;
    
    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');


    // 1. Al abrir la conexión, solicitar el nick.
    
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    socket.onopen  = function(e){ 
        console.log('WebSocket abierto.. [status: '+this.readyState + ']');
        ok = true;
        input.disabled = false;
        status.innerText = 'Enter nick';
    };

    socket.onclose = function(e){
        console.log('WebSocket cerrado.. [status: ' + this.readyState + ']');
        ok = false;
    };

    socket.onmessage = function(e){
        var data;
        try{
            data = JSON.parse(e.data);

        } catch(ex){
            console.log('Error with JSON message');
        } 
        if(data){
            console.log(data);

            switch(data.type){
                case "color": 
                    myColor = data.data;
                    status.style.color = myColor;
                    status.innerText = myName + ':';
                    break;
                case "history": 
                    for (var i = 0; i < data.length; i++) {
                        var msg = data.data[i];
                        addMessage(msg.author, msg.text, msg.color, new Date(msg.time));
                    }
                    break;
                case "message":
                    var msg = data.data;
                    addMessage(msg.author, msg.text, msg.color, new Date(msg.time));
                    break;
            }

        }
        
    };

    var inputFn = function(e){
        if (e.keyCode === 13){
            var value = this.value;
            
            if(value){
                if (!myName){
                    myName = value;
                }
                socket.send(value);
                input.value = '';
            }
        }
    };

    input.addEventListener('keydown', inputFn, false);

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
});