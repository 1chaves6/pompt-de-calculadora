let currentInput = '0';
let shouldResetScreen = false;

const displayElement = document.getElementById('display');

function updateDisplay() {
    displayElement.innerText = currentInput;
}

function appendValue(value) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = value;
        shouldResetScreen = false;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function calculate() {
    try {
        // Substitui o sinal de multiplicação para a sintaxe do Javascript
        let expression = currentInput.replace('x', '*');
        
        // Avalia a expressão com segurança básica
        let result = eval(expression);
        
        if (result === Infinity || isNaN(result)) {
            currentInput = 'Erro';
        } else {
            currentInput = result.toString();
        }
    } catch (error) {
        currentInput = 'Erro';
    }
    
    updateDisplay();
    shouldResetScreen = true;
}
