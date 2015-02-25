window.onload = function(){
    var enlaces = document.querySelectorAll('a');
    console.log("1. Enlaces de la página:" + enlaces.length);

    console.log("2.Dirección del penúltimo enlace: " + enlaces[enlaces.length-2].href);

    var count = 0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces.item(i).href === "http://prueba/"){
            count++;
        }
    }
    console.log("3. Número de enlaces a http://prueba: " + count);

    var parrafo = document.querySelectorAll('p');
    if (parrafo.length >2){
        console.log("4. Número de enlaces del 3er párrafo: " + parrafo[2].querySelectorAll('a').length);   
    }

    /* Otra forma
    enlaces = document.querySelectorAll('body > p:nth-child(3) a');
    console.log ("Numero de enlaces: " + enlaces.Lenght);
    */
    
};