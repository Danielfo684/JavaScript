import { calculatorUI } from './calculatorUI.js';


let keepNumberOnWindow = true;
let lastOperation = undefined;
let numberWindow = document.getElementById('calculos');
let calculo = undefined;
let numeroAnterior = undefined;
let historial = document.getElementById('historial');
let numeroActual = undefined;

export const Calculator = {
    initCalculator: () => {
        calculatorUI(lastOperation, keepNumberOnWindow);
    },

    addToWindow: (item) => {
        if (!keepNumberOnWindow) numberWindow.innerHTML = "0";
        keepNumberOnWindow = true;
        if (item != null) {
            numberWindow.innerHTML = numberWindow.innerHTML + item.dataset.number;
            while (numberWindow.innerHTML.startsWith("0")) numberWindow.innerHTML = numberWindow.innerHTML.substring(1);
        numeroActual = numberWindow.innerHTML;
        }
    },

    resetCalculation: () => {
        keepNumberOnWindow = false;
        lastOperation = undefined;
        calculo = undefined;
    },
    operacion: (lastOperation) => {

            if (numeroActual != undefined && calculo != undefined) {
                let numeroAnterior = calculo;
                switch (lastOperation) {
                    case "+":
                        calculo = parseInt(calculo) + parseInt(numberWindow.innerText);
                        break;
                    case "-":
                        calculo = parseInt(calculo) - parseInt(numberWindow.innerText);
                        break;
                }
                Calculator.agregarAlHistorial(historial, numberWindow.innerText, numeroAnterior, lastOperation, calculo);
                numberWindow.innerText = calculo;
            }
            else {
                calculo = parseInt(numberWindow.innerText);
            }
            keepNumberOnWindow = false;
        numeroActual = undefined;
    },
    agregarAlHistorial: (pantalla, actual, anterior, operacion, resultado) => {
        const nuevoElemento = document.createElement("div");
        nuevoElemento.textContent = anterior + operacion + actual + " = " + resultado;
        nuevoElemento.style.cursor = "pointer";
        nuevoElemento.addEventListener('click', () => {
            Calculator.resetCalculation();
            numberWindow.innerText = resultado;
        })
        pantalla.appendChild(nuevoElemento);
    }
};
