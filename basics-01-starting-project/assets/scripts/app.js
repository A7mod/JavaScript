const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);

}

function add(){
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);

}

addBtn.addEventListener('click', add);

//let calculationDescription = `( ${defaultResult} + 10) * 4 / 2 - 1`;

//outputResult(currentResult, calculationDescription);  