HTMLFormElement.prototype.validate = function(){
    console.log('Validate function');

    var validador = {
        
        required : function(val){
            return val !== undefined && val !== null && val.length > 0 && !/^\s+$/.test(val);
        },
        email : function(val){
            var ok = !(/^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(val)) ? false : true;
            return ok;
        },
        textarea : function(val){
            var ok = (val.length > 50) ? false : true;
            return ok;
        },
        password : function(val){
            var ok = !(/[a-zA-Z\d]{6,}/.test(val)) ? false : true;
            return ok;
        }
    };

    var required = this.querySelectorAll('.required');
    var email = this.querySelectorAll('.email');
    var checked = this.querySelectorAll('.checked');
    var textarea = this.querySelectorAll('textarea');
    var password = this.querySelectorAll('.password');
    
    var validate = function(e) {
        console.log('Validando funcion..');

        //si hay errores pararlo
        e.preventDefault();

        var errors = [];
        for (var i = 0; i < required.length; i++) {
            if (!validador.required(required[i].value)){
                console.log('El campo ' + required[i].name + ' es obligatorio.');
                errors.push('El campo ' + required[i].name + ' es obligatorio.');
            }
        }

        for (i = 0; i < email.length; i++) {
            if (!validador.email(email[i].value)){
                console.log('El email ' + email[i].value + ' no es válido.');
                errors.push('El email ' + email[i].value + ' no es válido.');
            }
        }

        for (i = 0; i < checked.length; i++) {
            if (!checked[i].checked){
                console.log('El checkbox ' + checked[i].name + ' debe selccionarse.');
                errors.push('El checkbox ' + checked[i].name + ' debe selccionarse.');
            }
        }

        for (i = 0; i < textarea.length; i++) {
            if (!validador.textarea(textarea[i].value)){
                console.log('El campo ' + textarea[i].name + ' tiene una longitud máxima de 50.');
                errors.push('El campo ' + textarea[i].name + ' tiene una longitud máxima de 50.');
            }
        }

        for (i = 0; i < password.length; i++) {
            if (!validador.password(password[i].value)){
                console.log('El password ' + password[i].value + ' no es válido.');
                errors.push('El password ' + password[i].value + ' no es válido.');
            }
        }



        if (errors.length){
            //mostrar alert
            alert(errors.join('\r'));
        }
        else{
            //hacer el submit
        }

        
    };

    this.addEventListener('submit', validate, false);
};
