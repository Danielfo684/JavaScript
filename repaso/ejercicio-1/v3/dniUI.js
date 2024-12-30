import { dniValidator } from './dniValidator.js';

export const dniUI = {

    init: (dni) => {
        dni.addEventListener('change', () => {
            dniValidator.validateNif(dni);
        })

    },

    wrongDniMessage: (dni) => {
        let mensaje = document.createElement('div');
        mensaje.classList.add('message');
        mensaje.appendChild(document.createTextNode('Wrong DNI'));
        dni.appendChild(mensaje);
        setTimeout(() => {
            mensaje.classList.add('hidden');
        }, 2000);

    },
    correctDniMessage: (dni) => {
        let mensaje = document.createElement('div');
        mensaje.classList.add('message');

        mensaje.style.backgroundColor = 'green';
        mensaje.appendChild(document.createTextNode('Correct DNI'));
        dni.appendChild(mensaje);
        setTimeout(() => {
                mensaje.remove();
        }, 5000);
    }

}