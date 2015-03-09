var button = document.getElementById('calcular');
var number = document.getElementById('number');
var results = document.getElementById('results');

var worker = new Worker('assets/js/primes.js');


button.addEventListener('click', function(e){
    e.preventDefault();

    var num = number.value;

    worker.postMessage(num);

    
});

worker.addEventListener('message', function(e){
    var primes = e.data;

    results.innerHTML = primes.join(' ');
});










    


