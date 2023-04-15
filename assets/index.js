let operand1 = null;
let operator = null;
let isCalculating = false;

function clearResult() {
    document.getElementById("result").value = "";
    operand1 = null;
    operator = null;
    isCalculating = false;
}

function backspace() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.substring(0, result.length - 1);
}

function insertNumber(number) {
    let result = document.getElementById("result").value;
    if (isCalculating) {
        result = "";
        isCalculating = false;
    }
    document.getElementById("result").value = result + number;
}

function insertOperator(newOperator) {
    if (operator != null) {
        calculate();
    }
    operand1 = parseFloat(document.getElementById("result").value);
    operator = newOperator;
    isCalculating = true;
}

function calculate() {
    let operand2 = parseFloat(document.getElementById("result").value);
    let result = null;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
    }
    document.getElementById("result").value = result;
    operand1 = result;
    operator = null;
    isCalculating = true;
}
