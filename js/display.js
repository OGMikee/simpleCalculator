function updateDisplay(calculator) {
    updateCurrentOperand(calculator.getCurrentOperand());
    updatePreviousOperand(calculator.getPreviousOperand(), calculator.operation);
}

function clearDisplay() {
    document.getElementById("previous-operand").textContent = "";
    document.getElementById("current-operand").textContent = '0';
}

function updateCurrentOperand(value) {
    document.getElementById("current-operand").textContent = formatNumber(value);
}

function updatePreviousOperand(value, operation) {
    if (!value || !operation) {
        document.getElementById("previous-operand").textContent = '';
        return;
    }
    document.getElementById("previous-operand").textContent = `${formatNumber(value)} ${operation}`;
}

function showError(message) {
    document.getElementById("current-operand").textContent = message;
    document.getElementById("previous-operand").textContent = "";
}

function formatNumber(number) {
    return formatDisplayNumber(number);
}