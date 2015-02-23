(function(){

    var palindromo = function(str) {
    if (typeof str == 'string'){
        var tmp = str.trim().toLowerCase().replace(/\s/g, '').split('').reverse().join('');

        return tmp=== str.trim().toLowerCase().replace(/\s/g, '');
    }
        return false;

    };

    console.log(palindromo(' radar  ') === true);
    console.log(palindromo('JavaScript mola mazo') === true);


}

    )();
