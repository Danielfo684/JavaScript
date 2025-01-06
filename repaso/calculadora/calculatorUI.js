import { Calculator } from './Calculator.js';
export const calculatorUI = (lastOperation, keepCalculation) => {

    document.querySelectorAll(".calc-item").forEach((item) => {
        if (!isNaN(item.textContent)) {

            item.dataset.number = item.textContent;
            item.addEventListener('click', (event) => {
                event.preventDefault();
                Calculator.addToWindow(item);

            })
        }
    });
    document.getElementById("item-suma").addEventListener('click', (event) => {
        lastOperation = '+';
        Calculator.operacion(lastOperation);
    });
    document.getElementById("item-resta").addEventListener('click', (event) => {
        lastOperation = '-';
        Calculator.operacion(lastOperation);
    });
    document.getElementById("item-c").addEventListener('click', (event) => {
        Calculator.resetCalculation();

        Calculator.addToWindow(null);

    });

    document.getElementById("item-igual").addEventListener('click', (event) => {
        Calculator.operacion(lastOperation);
        Calculator.resetCalculation();
    })

}