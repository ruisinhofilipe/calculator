function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let display = document.querySelector('.currentOutput');
let previousDisplay = document.querySelector('.previousOutput')
let equal = document.querySelector('.equal');
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators');
let firstValue = '';
let secondValue;
let mainOperator;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        firstValue += number.id;
        display.textContent = firstValue;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        mainOperator = operator.id;
        secondValue = firstValue;
        firstValue = '';
        previousDisplay.textContent = `${secondValue} ${operator.id}`;
        display.textContent = '';
    })
})

equal.addEventListener('click', () => {
    calculate();
})

function calculate() {
    firstValue = Number(firstValue);
    secondValue = Number(secondValue);
    if (mainOperator === '+') {
        display.textContent = add(secondValue, firstValue);
    } else if (mainOperator === '-') {
        display.textContent = subtract(secondValue, firstValue);
    } else if (mainOperator === '*') {
        display.textContent = multiply(secondValue, firstValue);
    } else if (mainOperator === '/') {
        display.textContent = divide(secondValue, firstValue);
    }
}