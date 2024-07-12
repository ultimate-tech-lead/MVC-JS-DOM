// Controller
const controller = {
    numberClicked: function(number) {
        if (model.waitingForSecondOperand === true) {
            model.displayValue = number;
            model.waitingForSecondOperand = false;
        } else {
            model.displayValue = model.displayValue === '0' ? number : model.displayValue + number;
        }
        view.updateDisplay();
    },
    operatorClicked: function(operator) {
        const inputValue = parseFloat(model.displayValue);
        if (model.operator && model.waitingForSecondOperand) {
            model.operator = operator;
            return;
        }
        if (model.firstOperand === null) {
            model.firstOperand = inputValue;
        } else if (model.operator) {
            const result = this.calculate(model.firstOperand, inputValue, model.operator);
            model.displayValue = String(result);
            model.firstOperand = result;
        }
        model.waitingForSecondOperand = true;
        model.operator = operator;
        view.updateDisplay();
    },
    handleCalculate: function () {
        if (model.operator && model.firstOperand !== null) {
            const result = this.__calculate(model.firstOperand, parseFloat(model.displayValue), model.operator);
            model.displayValue = String(result);
            model.firstOperand = null;
            model.operator = null;
            model.waitingForSecondOperand = false;
            view.updateDisplay();
        }
    },
    __calculate: function(firstOperand, secondOperand, operator) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            default:
                return secondOperand;
        }
    },
    clear: function() {
        model.displayValue = '0';
        model.operator = null;
        model.firstOperand = null;
        model.waitingForSecondOperand = false;
        view.updateDisplay();
    }
};

view.updateDisplay();
