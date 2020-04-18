const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and write calculation log
function createAndWriteOuput(operator, resultBeforeCalc, CalcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUB' &&
    calculationType !== 'MUL' &&
    calculationType !== 'DIV' ||
    !enteredNumber
  ) {
    return;
  }
  const initialResult = currentResult;
  let mathOper;
  if (calculationType == "ADD") {
    currentResult += enteredNumber;
    mathOper = "+";
  } else if (calculationType == "SUB") {
    currentResult -= enteredNumber;
    mathOper = "-";
  } else if (calculationType == "MUL") {
    currentResult *= enteredNumber;
    mathOper = "*";
  } else if (calculationType == "DIV") {
    currentResult /= enteredNumber;
    mathOper = "/";
  }
  createAndWriteOuput(mathOper, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUB");
}

function multiply() {
  calculateResult("MUL");
}

function divide() {
  calculateResult("DIV");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
