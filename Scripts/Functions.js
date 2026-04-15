//Normal function    //supports function hoisting

function Add(a, b) {
  return a + b;
}

document.writeln(`Add(3453, 453) = ${Add(3453, 453)}<br/>`);

//anonymous function   //does not support function hoisting
//function la variable madhe store krt
var addition = function (a, b) {
  return a + b;
};

document.writeln(`addition(3453, 453) = ${addition(3453, 453)}<br/>`);

//Arrow function  //does not support function hoisting
//function la variable madhe store krt

var additionArrow = (a, b) => a + b;
document.writeln(`${additionArrow(34534545, 453)}<br/>`);



//closure function
function outerFunction() {
  var outerVariable = "I am from outer function";   


    function innerFunction() {
        return outerVariable;  //inner function can access outer function variable
    }

    return innerFunction;  //returning inner function
}

var closureFunction = outerFunction();  //closureFunction is now innerFunction
document.writeln(`closureFunction() = ${closureFunction()}<br/>`);  //calling inner function through closureFunction variable





