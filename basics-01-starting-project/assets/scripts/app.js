const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);

}

function createWriteOutput(operator, resultBefore, calcNumber){
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}

function writeToLog(opId, prevResult, opNum, newResult) {
    const logEntry = {
        operation : opId,
        prevResult : prevResult,
        number : opNum,
        result : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);

}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    
    createWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculateType, initialResult, enteredNumber, currentResult);

}

function add(){
    calculateResult('ADD');
}


function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');    
}

function divide(){
    calculateResult('DIVIDE');
    }

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


