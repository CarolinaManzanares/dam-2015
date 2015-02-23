(function(){
    var InfoStr = function(s){
        
        var res;
        if (typeof s == 'string'){
            if (s === s.toLowerCase()){
                console.log("Minúsculas");
            }
            else if (s === s.toUpperCase()){
                console.log("Mayúsculas");
            }
            else{
                console.log("Mayúsculas y minúsculas");
            }
        }
        else{
            throw 'No es un estring';
        }
    };

    console.log(InfoStr("aaa") === 'Minúsculas');
    console.log(InfoStr("AAA") === 'Mayúsculas');
    console.log(InfoStr("Aaa") === 'Mayúsculas y minúsculas');

    /*try{ //hay que hacer un trycatch para cada uno de ellos
        console.log(InfoStr("4") === false);
    console.log(InfoStr("-1") === false);
    console.log(InfoStr() === false);
    console.log(InfoStr({}) === false);
    console.log(InfoStr(function(){}) === false);
    console.log(InfoStr(null) === false);
        
    } catch (e){
        if (e instanceof Error){

        }
        else if (e instanceof typeof){

        }
    }*/
    
}


    )();
