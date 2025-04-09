let display = document.getElementById('display');
let currentValue = '';

function appendCharacter(char) {
    if (currentValue === '0') currentValue = '';
    currentValue += char;
    display.innerText = currentValue;
}

function clearDisplay() {
    currentValue = '0';
    display.innerText = currentValue;
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1) || '0';
    display.innerText = currentValue;
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        display.innerText = currentValue;
    } catch {
        display.innerText = 'Error';
        currentValue = '0';
    }
}
