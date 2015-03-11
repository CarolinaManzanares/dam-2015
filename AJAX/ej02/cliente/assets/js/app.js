$(function(){
    var $provincias = $('#provincias'),
        $municipios = $('#municipios');

    var fillSelect = function($select, values){
        var options = [];

        for (var i in values){
            options.push(new Option(values[i], i));
        }
        $select.children().remove();
        $select.append(options);

    };

    $.getJSON('../servidor/cargaProvinciasJSON.php', null, function(data, status, jqXHR){
        fillSelect($provincias, data);
    });

    var cargaMunicipios = function(e){
        console.log('en cargaMunicipios');
        var provincia = $provincias.val();

        $.ajax('../servidor/cargaMunicipiosJSON.php', {
            method : 'POST',
            data : {
                provincia : provincia
            },
            dataType : 'json',
            success : function(municipios){
                fillSelect($municipios, municipios);
            }
        }
    );
};

    $provincias.on('click', cargaMunicipios);


});