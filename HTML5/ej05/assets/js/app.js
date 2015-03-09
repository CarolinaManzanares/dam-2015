(function(){
    var tweet = {
        id: "0989102",
        text : "Lorem ipsum dolor sit amet",
        author : "el Nombre",
        createdAt : "Mon Sep 24 03:34:23 +0000 2012"
    };

    APP.DB.insert(tweet);
    // var success = function(datos){
    //     console.log(datos);
    // };
    APP.DB.get(tweet.id, function(t){
        console.log(t);
    });

})();