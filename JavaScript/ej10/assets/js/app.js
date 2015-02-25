window.onload = function(){

    var ul = document.getElementById('lista');
    //var lis = ul.querySelectorAll('li');
    var btn = document.getElementById('add');
   

    var add = function(e){
        e.stopPropagation();
        if (ul){
            var li = document.createElement('li');
            li.innerText = "Nuevo elemento" + (ul.children.length + 1); //o innerHTML q procesa las etiquetas html
            li.addEventListener('click', remove, false);
            ul.appendChild(li);
            
        }
    };

    var remove = function(e){
        if (confirm('Seguro que desea eliminar este elemento?')){
            this.removeChild(e.target);
        }
    };

    var log = function(e){
        console.log("Se ha hecho click en " + e.target);
    };

    if (btn){
            btn.addEventListener('click', add, false);
    }

    /*if (lis.length){
        for (var i = lis.length - 1; i >= 0; i--) {
            lis[i].addEventListener('click', remove, false);
        };
    }*/

    if (ul){
        ul.addEventListener('click', remove, false);
    }

    document.addEventListener('click', log, false);
};