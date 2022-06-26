const calc = function(operação, num1, num2){
    return operação(num1, num2)
}

const soma = function (num1, num2){
    return num1 + num2;
}

const sub = function (num1, num2){
    return num1 - num2;
}

const mult = function (num1, num2){
    return num1 * num2
}

const resultmult = calc(mult, 5, 2);
const resultsoma = calc(soma, 10, 2);
const resultsub = calc(sub, 18, 2);

console.log(resultsoma);
console.log(resultsub);
console.log(resultmult);