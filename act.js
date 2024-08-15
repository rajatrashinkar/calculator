let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        let expression = display.innerText;
        // Handle square root
        expression = expression.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
        // Handle log
        expression = expression.replace(/log(\d+(\.\d+)?)/g, 'Math.log10($1)');
        display.innerText = eval(expression);
    } catch (error) {
        display.innerText = 'Error';
    }
}
