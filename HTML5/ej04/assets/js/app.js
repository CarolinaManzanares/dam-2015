(function(){
    var tweet = {
        id: "0989099",
        text : "Lorem ipsum dolor sit amet",
        author : "el Nombre",
        createdAt : "bnmnb"
    };

    //APP.DB.insert(tweet);
    var success = function(datos){
        console.log(datos);
    };
    APP.DB.getAll(success);

})();