(function(){
    console.log('Geolocalización...');

    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
    });

    

})();