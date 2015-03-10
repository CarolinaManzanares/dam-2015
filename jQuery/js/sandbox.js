$(function(){
    var $div = $('div.module');
    var $li = $('#myList li:nth-child(3)');
    
    var $lis = $('#myList > li');

    $lis.on('click mouseover', function(e){
        console.log(e);
        console.log(this);
    });

    console.log($lis.eq(2));

    var $ul = $('#myList');
    console.log($ul.find('li').eq(2));

    var $input = $('input[name="q"]');
    var $label = $('label[for="' + $input.attr('name') + '"]');
    console.log($label);

    var $hidden = $(':hidden');
    $hidden.each(function(idx, elem){
        $(elem).show();
    });

    var $imgs = $('img');
    $imgs.each(function(idx, elem){
        console.log(elem.alt);
    });

    $input.closest('form').addClass('form');
    $input.closest('form').removeClass('form');
    $input.closest('form').toggleClass('form'); //si tiene la clase quitasela sino ponsela

    var $current = $('#myList .current');
    $current.removeClass('current').next().addClass('current');

    var $submit = $('#especials select').closest('ul').find('input[type="submit"]');

    $('#slideshow li').first().addClass('current').siblings().addClass('disabled');

    var lis = [];
    for(var i = 0; i < 5; i++){
        lis.push('<li>Element ' + i + '</li>');
    }
    $ul.append(lis.join(''));

    $ul.find('li:odd').remove();

    $li = $('<li/>', {
        class : 'current',
        text : 'Node list',
        id : 'myli'
    });
    $ul.append($li);/*a ul añadele el li */

    $li.appendTo($ul); /*el li lo añades al ul*/

    $ul.on('click', 'li', function(e){
        console.log(e);
        console.log(this); //el evento lo recibe ul pero este this le digo que sea el li Esto soluciona el problema de los elementos nuevos (que no escuchan el evento)
    });


});