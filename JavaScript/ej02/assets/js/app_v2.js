(function(){

    var fact = function(n){
        return n * fact(n-1);
    };

    console.log(fact(4));
}

)();