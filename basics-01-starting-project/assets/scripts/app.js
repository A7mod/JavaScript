const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2){
    const result = num1 + num2;
    alert('The result is: ' + result);
}

add(1,2);
add(12,10);

currentResult = (currentResult + 10) *  4/ 2 - 1;

let calculationDescription = `( ${defaultResult} + 10) * 4 / 2 - 1`;

outputResult(currentResult, calculationDescription);  