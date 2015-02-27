//Crear módulo. Devuelve un objeto
var todoApp = angular.module('todoApp', []);

//Crear controller
todoApp.controller('TodoController', ['$scope', function($scope){
    var todos = [];

    //podríamos llamar a una base de datos si la tuvieramos
    todos.push({done : false, task : 'Aprender AngularJS'});
    todos.push({done : false, task : 'Aprender Ionic'});
    todos.push({done : true, task : 'Adorar JavaScript'});

    //
    $scope.todos = todos;

    $scope.addTodo = function() {
        todos.push({done: false, task: $scope.inputText});
        $scope.inputText='';
    };



}]);