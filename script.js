let currentValue = '';
let previousValue = '';
let op = '';

let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators');
let displayCurrentValue = document.querySelector('.displayCurrentValue');
let displayPreviousValue = document.querySelector('.displayPreviousValue');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentValue += number.id;
        displayCurrentValue.textContent = currentValue;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (currentValue === '') {
            op = operator.id;
            displayPreviousValue.textContent = `${previousValue} ${op}`;
            displayCurrentValue.textContent = '';
            currentValue = '';
            console.log(currentValue);
            console.log(previousValue);
        } else if (previousValue === '') {
            op = operator.id;
            previousValue = currentValue;
            displayPreviousValue.textContent = `${previousValue} ${op}`;
            displayCurrentValue.textContent = '';
            currentValue = '';
        } else {
            calculate();
            op = operator.id;
            displayPreviousValue.textContent = `${previousValue} ${op}`;
            displayCurrentValue.textContent = '';
        }
    });
});

let erase = document.querySelector('.delete');
erase.addEventListener('click', () => {
    currentValue = '';
    previousValue = '';
    op = '';
    displayCurrentValue.textContent = '';
    displayPreviousValue.textContent = '';
})

let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    displayPreviousValue.textContent = '';
});

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if (op === '+') {
        previousValue += currentValue;
    } else if (op === '-') {
        previousValue -= currentValue;
    } else if (op === '*') {
        previousValue *= currentValue;
    } else if (op === '/') {
        previousValue /= currentValue;
    }
    currentValue = '';
    op = '';
    previousValue = previousValue.toString();
    displayCurrentValue.textContent = previousValue;
}








