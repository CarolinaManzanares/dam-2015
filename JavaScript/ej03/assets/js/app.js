(function(){

    var esPar = function(num){

        if (typeof num === 'number'){
            
            return (num%2 === 0);
        }
        else{
            return NaN;
        }
        
    };

    console.log(esPar(0) === true);
    console.log(esPar(2) === true);
    console.log(esPar(1) === false);
    console.log(isNaN(esPar("a")));
    console.log(isNaN(esPar()));
   
}
)();