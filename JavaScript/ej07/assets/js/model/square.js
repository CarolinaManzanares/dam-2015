var App = App || {Model: {} };
App.Model.Square = (function(){
    var _lado;

    function Square(x, y, l){
        App.Model.Shape.call(x, y);
        _lado = (typeof l === 'number') ? l : 0;
    }

    //Indicamos el padre
    Square.prototype = Object.create(App.Model.Shape.prototype);
    Square.prototype.Constructor = Square;

    Square.prototype.getL = function(){
        return _lado;
    };

    Square.prototype.setL = function(lado){
        _lado = (typeof lado === 'number' ? lado : _lado);
    };

    Square.prototype.getArea = function(){
        return Math.pow(_lado, 2);
    };

    return Square;


})();