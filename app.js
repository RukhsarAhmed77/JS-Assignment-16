var num1 = '';
var operator = '';
var num2 = '';
var screen = document.getElementById('screen');

function updateScreen(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        operator = value;
        screen.value = num1 + operator;
    } else {
        if (operator === '') {
            num1 += value;
            screen.value = num1;
        } else {
            num2 += value;
            screen.value = num1 + operator + num2;
        }
    }
}

function clearAll() {
    num1 = '';
    operator = '';
    num2 = '';
    screen.value = '';
}

function clearLast() {
    if (num2 !== '') {
        num2 = num2.slice(0, -1);
    } else if (operator !== '') {
        operator = '';
    } else {
        num1 = num1.slice(0, -1);
    }
    screen.value = num1 + operator + num2;
}

function calculate() {
    var result;
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            result = 'Undefined';
    }
    screen.value = result;
    num1 = result.toString();
    operator = '';
    num2 = '';
}
