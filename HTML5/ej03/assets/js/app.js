window.onload = function(){

    var inputs = document.querySelectorAll('input, textarea'),
       storage = localStorage,
        prefix = 'eje03_prefix_'; //para evitar conflictos con otras páginas del mismo dominio (forms con names iguales)

    var saveText = function(e){
        storage.setItem(prefix + this.name, this.value);

    };

    for (var i = inputs.length - 1; i >= 0; i--) {
        inputs.item(i).addEventListener('input', saveText);
    }

    var showData = function(key, value){
        for (var i = inputs.length - 1; i >= 0; i--) {
            var name = key.replace(prefix, '');
            if (inputs.item(i).name === name) {
                inputs.item(i).value = value;
            }
        }
    };

    if (storage.length){
        for (var j = 0; j < storage.length; j++) {
            var key = storage.key(j);

            showData(key, storage.getItem(key));
        }
    }

    var handleStorage = function(e){
        console.log(e);

        showData(e.key, e.newValue);
    };


    window.addEventListener('storage', handleStorage);
    
};
