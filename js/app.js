let calculator;

function initializeCalculator() {
    calculator = new Calculator();
    setupEventListeners();
    updateDisplay(calculator);
}

function setupEventListeners() {
    const numberButtons = document.querySelectorAll('[data-number]');
    numberButtons.forEach(button => {
        button.addEventListener('click', handleNumberClick);
    });
    const operationButtons = document.querySelectorAll('[data-operation]');
    operationButtons.forEach(operation => {
        operation.addEventListener('click', handleOperatorClick);
    });
    document.querySelector('[data-action="equals"]').addEventListener('click', handleEqualsClick);
    document.querySelector('[data-action="clear"]').addEventListener('click', handleClearClick);
    document.querySelector('[data-action="delete"]').addEventListener('click', handleDeleteClick);
}

function handleNumberClick(event) {
    const number = event.target.dataset.number;
    calculator.appendNumber(number);
    updateDisplay(calculator);
}

function handleOperatorClick(event) {
    const operator = event.target.dataset.operation;
    calculator.chooseOperation(operator);
    updateDisplay(calculator);
}

function handleEqualsClick() {
    calculator.calculate();
    updateDisplay(calculator);
}

function handleClearClick() {
    calculator.clear();
    updateDisplay(calculator);
}

function handleDeleteClick() {
    calculator.delete();
    updateDisplay(calculator);
}

document.addEventListener('DOMContentLoaded', initializeCalculator);

function handleNumberClick(event) {
    console.log("Number clicked:", event.target.dataset.number);
    console.log("Calculator before:", calculator.currentOperand);
    const number = event.target.dataset.number;
    calculator.appendNumber(number);
    console.log("Calculator after:", calculator.currentOperand);
    updateDisplay(calculator);
}