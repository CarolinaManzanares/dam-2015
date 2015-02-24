(function(){
    var s1 = new App.Model.Shape();
    s1.move(5,5);
    console.log(s1.getX());
    console.log(s1.getY());

    var c = new App.Model.Circle(10, 10, 1);
    console.log(c.setR(2));
    console.log("Radio:");
    console.log(c.getR());
    console.log("Area del círculo:");
    console.log (c.getArea());

    var sq = new App.Model.Square(3, 3, 4);
    console.log(sq.getL());
    console.log("Lado del cuadrado:");
    console.log(sq.setL(2));
    console.log(sq.getL());
    console.log ("Area del cuadrado:");
    console.log(sq.getArea());

    var r = new App.Model.Rectangle(3, 3, 1, 2);
    console.log(r.getLados());


})();