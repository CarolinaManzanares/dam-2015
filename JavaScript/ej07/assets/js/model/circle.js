var App = App || { Model : {} };
App.Model.Circle = (function(){
    var _radius;
    //Constructor
    function Circle(x, y, radius){
        //App.Model.Shape.apply();
        //App.Model.Shape.bind();
        App.Model.Shape.call(x, y);
        _radius = (typeof radius === 'number') ? radius : 0;
    }

    //Indicamos el "padre"
    Circle.prototype = Object.create(App.Model.Shape.prototype);
    Circle.prototype.Constructor = Circle;

    Circle.prototype.getR = function(){
        return _radius;
    };

    Circle.prototype.setR = function(radius){
        _radius = (typeof radius === 'number' ? radius : _radius);
    };

    Circle.prototype.getArea = function(){
        return Math.PI * Math.pow(_radius, 2);
    };

    return Circle;

})();