const numberButtons = document.querySelectorAll(".buttons > .number");
const operators = document.querySelectorAll(".buttons > .operator");
const equals = document.querySelector(".buttons > .equals");

const screen = document.querySelector(".screen");

let isOperatorClicked = false;

let firstNumber;
let secondNumber;
let operator;

numberButtons.forEach((button) => {
    button.addEventListener(
        "click",
        (event) => (screen.textContent += event.target.textContent)
    );
});

operators.forEach((button) => {
    button.addEventListener("click", (event) => {
        const lastValue = screen.textContent[screen.textContent.length - 1];

        if (screen.textContent.length !== 0 && lastValue !== " ") {
            screen.textContent += ` ${event.target.textContent} `;
            isOperatorClicked = true;
        }
    });
});

equals.addEventListener("click", () => {
    if (screen.textContent[screen.textContent.length - 1] !== " " && isOperatorClicked) {
        const operands = screen.textContent.split(" ");
        console.log(operate(operands[0], operands[1], operands[2]));
    }
});

function operate(firstNumber, operator, secondNumber) {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;

    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return NaN;
    }

    return a / b;
}
