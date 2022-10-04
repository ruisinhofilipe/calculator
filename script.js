function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x + y;
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
let deleteAll = document.querySelector('.delete');
let clear = document.querySelector('.clear');
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators');
let array = [];
let mainValue = 0;
let currentValue = '';
let previousValue = '';
let mainOperator = '';


numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentValue += number.id;
        display.textContent = currentValue;
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        mainOperator = operator.id;
        previousValue = currentValue;
        currentValue = '';
        array.push(previousValue);
        array.push(mainOperator);
        previousDisplay.textContent = array.join(' ');
    })
});

clear.addEventListener('click', () => {
    currentValue = currentValue.slice(0, currentValue.length - 1);
    display.textContent = currentValue;
})

equal.addEventListener('click', () => {
    calculate();
})

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if (mainOperator === '+') {
        mainValue += previousValue + currentValue;
    } else if (mainOperator === '-') {
        mainValue += previousValue - currentValue;
    } else if (mainOperator === '/') {
        mainValue /= previousValue / currentValue;
    } else if (mainOperator === '*') {
        mainValue *= previousValue * currentValue;
    }
    array.push(currentValue);
    previousDisplay.textContent = array.join(' ');
    display.textContent = mainValue;
    previousValue = '';
    currentValue = '';
    mainOperator = '';
}