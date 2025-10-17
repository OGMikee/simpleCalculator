class Calculator {
    constructor() {
        this.currentOperand = "0";
        this.previousOperand = "";
        this.operation = null;
    }

    appendNumber(number) {
        if (this.currentOperand.includes('.') && number === '.') return;
        if (this.currentOperand === "0" && number !== ".") {
            this.currentOperand = number.toString();
            return;
        }
        this.currentOperand += number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand === ""){
            this.previousOperand = this.currentOperand;
            this.currentOperand = "";
        }
        else{
            this.calculate();
        }
        this.operation = operation;
    }

    calculate() {
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        if (this.operation === '/' && current === 0) {
            showError("Cannot divide by zero");
            this.previousOperand = "";
            this.operation = null;
            return;
        }

        const operations = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        }

        const res = operations[this.operation](prev, current)
        this.currentOperand = res.toString();
        this.previousOperand = "";
        this.operation = null;
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = null;
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0,-1);
    }

    getCurrentOperand() {
        return this.currentOperand;
    }

    getPreviousOperand() {
        return this.previousOperand;
    }
}