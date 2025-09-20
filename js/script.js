const numberButtons = document.querySelectorAll("div > .number");
const operators = document.querySelectorAll("div > .operator");
const screen = document.querySelector(".screen");

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
        const lastValue =
            screen.textContent[screen.textContent.length - 1];

        if (screen.textContent.length !== 0 && lastValue !== " ") {
            screen.textContent += ` ${event.target.textContent} `;
        }
    });
});

function operate(firstNumber, operator, secondNumber) {
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
