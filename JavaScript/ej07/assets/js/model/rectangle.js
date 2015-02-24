var App = App || {Model: {} };
App.Model.Rectangle = (function(){
    var _lado2;

    function Rectangle(x, y, l1, l2){
        App.Model.Square.call(x, y, l1);
        _lado2 = (typeof l === 'number') ? l2 : 1;
    }

    //Indicamos el padre
    Rectangle.prototype = Object.create(App.Model.Square.prototype);
    Rectangle.prototype.Constructor = Rectangle;



    Rectangle.prototype.getLados = function(){
        var lados = [];
        lados.push(this.getL());
        lados.push(_lado2);
        return lados;
    };

    Rectangle.prototype.setL = function(lado){
        _lado = (typeof lado === 'number' ? lado : _lado);
    };

    Rectangle.prototype.getArea = function(){
        return _lado2 * this.getL();
    };

    return Rectangle;


})();