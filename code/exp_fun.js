var square = function (x) {
return x * x; 
}; 
console.log(square(3)); 

var fatorial = function fat(n) {
    return n < 2?1:n * fat(n - 1); 
}; 

console.log(fatorial(3)); 

function map(fun, array) {
    var result = []; 
    for (i = 0; i != array.length; i ++)
        result[i] = fun(array[i]); 
    return result; 
}

console.log(map(function (x) {return x * x * x; }, [0, 1, 2, 5, 10])); 