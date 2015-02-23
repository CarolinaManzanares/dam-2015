(function(){
    var fact = function(n){
        
        var r = 1;
        if (typeof n === 'number' && n>=0){

        for(var i = r; i <= n; i++){
            r = r * i;
        }

        return r;
        }
        else return false;
    };

    console.log(fact(0) === 1);
    console.log(fact(1) === 1);
    console.log(fact(2) === 2);
    console.log(fact(3) === 6);
    console.log(fact(4) === 24);
    console.log(fact("texto") === false);
    console.log(fact("4") === false);
    console.log(fact("-1") === false);
    console.log(fact() === false);
    console.log(fact({}) === false);
    console.log(fact(function(){}) === false);
    console.log(fact(null) === false);
    
    
    
}
)();
