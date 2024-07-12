// View
const view = {
    display: document.getElementById('display'),
    updateDisplay: function() {
        this.display.value = model.displayValue;
    }
};

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        controller.numberClicked(button.getAttribute('data-value'));
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        controller.operatorClicked(button.getAttribute('data-value'));
    });
});

document.getElementById('clear').addEventListener('click', () => {
    controller.clear();
});

document.getElementById('calculate').addEventListener('click', () => {
    controller.handleCalculate();
});