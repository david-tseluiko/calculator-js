const numberButtons = document.querySelectorAll(".buttons > .number");
const operators = document.querySelectorAll(".buttons > .operator");
const equals = document.querySelector(".buttons > .equals");
const clear = document.querySelector(".buttons > .clear");
const deleteButton = document.querySelector(".buttons > .delete");

const screen = document.querySelector(".screen");

let isOperatorClicked = false;
let isResultDisplayed = false;

let firstNumber;
let secondNumber;
let operator;

numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (isResultDisplayed) {
            screen.textContent = "";

            isOperatorClicked = false;
            isResultDisplayed = false;
        }

        screen.textContent += event.target.textContent;
    });
});

operators.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (screen.textContent.length !== 0 && isOperatorClicked === false) {
            screen.textContent += ` ${event.target.textContent} `;
            isOperatorClicked = true;
        }
    });
});

equals.addEventListener("click", () => {
    if (
        screen.textContent[screen.textContent.length - 1] !== " " &&
        isOperatorClicked
    ) {
        const operands = screen.textContent.split(" ");
        operate(operands[0], operands[1], operands[2]);

        isResultDisplayed = true;
    }
});

clear.addEventListener("click", () => {
    screen.textContent = "";
});

deleteButton.addEventListener("click", () => {
    if (screen.textContent.length !== 0) {
        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    }
})

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
    screen.textContent = a + b;
}

function subtract(a, b) {
    screen.textContent = a - b;
}

function multiply(a, b) {
    screen.textContent = a * b;
}

function divide(a, b) {
    if (b === 0) {
        screen.textContent = NaN;
        return 0;
    }

    screen.textContent = a / b;
}
