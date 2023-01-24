function add(a, b) {
    return a + b;
}

function subract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function btnClick(a) {
    if (num === "") {
        num = a;
    } else {
        num = num + a.toString();
    }
    document.getElementById('calcText').textContent = num;
}

let num = "";

let num1 = 0;

let num2 = 0;

let operator = "";

function btnClear() {
    num = "";
    document.getElementById('calcText').textContent = num;
    operator = "";
    document.getElementById('calcOp').textContent = "";
}

function btnOperator(a) {
    operator = a;
    num1 = num;
    num = "";
    document.getElementById('calcOp').textContent = `${num1} ${a}`;
    document.getElementById('calcText').textContent = num;
}

function btnEquals() {
    if (operator === "") {
        document.getElementById('calcText').textContent = num;
    } else if (num === "") {
        document.getElementById('calcText').textContent = num1;
        document.getElementById('calcOp').textContent = `${num1} =`;
    } else {
        num2 = num;
        num = "";
        if (operator === "+") {
            document.getElementById('calcText').textContent = parseFloat(num1) + parseFloat(num2);
        } else if (operator === "-") {
            document.getElementById('calcText').textContent = parseFloat(num1) - parseFloat(num2);
        } else if (operator === "*") {
            document.getElementById('calcText').textContent = parseFloat(num1) * parseFloat(num2);
        } else if (operator === "/") {
            document.getElementById('calcText').textContent = parseFloat(num1) / parseFloat(num2);
        }
        document.getElementById('calcOp').textContent = `${num1} ${operator} ${num2} =`;
    }
}