(function() {
        var validarDNI = function(dni) {
            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
            var ok=false;

            if (dni && typeof dni == "string" && dni.length === 9){
                var num = parseInt(dni);

                if (num >= 0 && num <= 99999999){
                    var char = dni.charAt(dni.length-1).toUpperCase; //o var  char = dni[8];
                    ok = char == letras[num % 23];
                }

            }

            return ok;

        };

        console.log(validarDNI("13304839Y") === true);
        console.log(validarDNI("13304836Y") === false);
        console.log(validarDNI("A") === false);
        console.log(validarDNI(1) === false);
        console.log(validarDNI() === false);
    }

)();
