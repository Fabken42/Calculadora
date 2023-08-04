// const displayElement = document.getElementById('display');
// let currentNumber = '0';
// let prevNumber = null;
// let operator = null;
// let displayNextNumber = false;

// function handleClick(event) {
//     const value = event.target.value;
//     if (isNumber(value)) {
//         if (currentNumber === '0' || displayNextNumber) {
//             currentNumber = value;
//             displayNextNumber = false;
//         } else {
//             currentNumber += value;
//         }
//     } else if (isOperator(value)) {
//         if (operator) {
//             performCalculation();
//         }
//         operator = value;
//         prevNumber = currentNumber;
//         displayNextNumber = true;
//     } else if (value === '=') {
//         performCalculation();
//     } else if (value === 'C') {
//         currentNumber = '0';
//         prevNumber = null;
//         operator = null;
//         displayNextNumber = false;
//     } else if (value === ',') {
//         if (!currentNumber.includes(',')) {
//             currentNumber += ',';
//         }
//     }

//     updateDisplay();
// }

// function isNumber(value) {
//     return !isNaN(value) && value !== ' ';
// }

// function isOperator(value) {
//     return ['+', '-', '*', '/'].includes(value);
// }

// function performCalculation() {
//     const num1 = parseFloat(prevNumber.replace(',','.'));
//     const num2 = parseFloat(currentNumber.replace(',','.'));
//     switch (operator) {
//         case '+':
//             currentNumber = (num1 + num2).toFixed(6).toString().replace('.',',');
//             break;
//         case '-':
//             currentNumber = (num1 - num2).toFixed(6).toString().replace('.',',');
//             break;
//         case '*':
//             currentNumber = (num1 * num2).toFixed(6).toString().replace('.',',');
//             break;
//         case '/':
//             currentNumber = (num1 / num2).toFixed(6).toString().replace('.',',');
//             break;
//     }
//     prevNumber = null;
//     operator = null;
// }

// function updateDisplay() {
//     displayElement.textContent = currentNumber;
// }


class Calculator {
    constructor() {
        this.displayElement = document.getElementById('display');
        this.currentNumber = '0';
        this.prevNumber = null;
        this.operator = null;
        this.displayNextNumber = false;
    }

    handleClick(event) {
        const value = event.target.value;
        if (this.isNumber(value)) {
            if (this.currentNumber === '0' || this.displayNextNumber) {
                this.currentNumber = value;
                this.displayNextNumber = false;
            } else {
                this.currentNumber += value;
            }
        } else if (this.isOperator(value)) {
            if (this.operator) {
                this.performCalculation();
            }
            this.operator = value;
            this.prevNumber = this.currentNumber;
            this.displayNextNumber = true;
        } else if (value === '=') {
            this.performCalculation();
        } else if (value === 'C') {
            this.currentNumber = '0';
            this.prevNumber = null;
            this.operator = null;
            this.displayNextNumber = false;
        } else if (value === ',') {
            if (!this.currentNumber.includes(',')) {
                this.currentNumber += ',';
            }
        }

        this.updateDisplay();
    }

    isNumber(value) {
        return !isNaN(value) && value !== ' ';
    }

    isOperator(value) {
        return ['+', '-', '*', '/'].includes(value);
    }

    performCalculation() {
        const num1 = parseFloat(this.prevNumber.replace(',', '.'));
        const num2 = parseFloat(this.currentNumber.replace(',', '.'));
        switch (this.operator) {
            case '+':
                this.currentNumber = (num1 + num2).toFixed(6).toString().replace('.', ',');
                break;
            case '-':
                this.currentNumber = (num1 - num2).toFixed(6).toString().replace('.', ',');
                break;
            case '*':
                this.currentNumber = (num1 * num2).toFixed(6).toString().replace('.', ',');
                break;
            case '/':
                this.currentNumber = (num1 / num2).toFixed(6).toString().replace('.', ',');
                break;
        }
        this.prevNumber = null;
        this.operator = null;
    }

    updateDisplay() {
        this.displayElement.textContent = this.currentNumber;
    }
}

const calculator = new Calculator();
const buttons = document.querySelectorAll('.botoes button');
buttons.forEach(button => {
    button.addEventListener('click', event => calculator.handleClick(event));
});
