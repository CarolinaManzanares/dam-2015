$(function(){
    var $ticker = $('#ticker'),
       $detener = $('#detener');

    var peticionAJAX = function(){
        // $.ajax('../servidor/generaContenidos.php', {
        //     success : function(data, status, jqXHR){
        //         $ticker.text(data);
        //     }
        // });

        //$.ajax() en este caso es equivalente a $.get()

        $.get('../servidor/generaContenidos.php', null, function(data, status, jqXHR){
                $ticker.text(data);
            });
    };

    var interval = setInterval(peticionAJAX, 5000);

    $detener.on('click', function(e){
        clearInterval(interval);
    });

    
    
});