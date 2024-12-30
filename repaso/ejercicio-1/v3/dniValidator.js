import {dniConfig} from './dniConfig.js';
import {dniUI} from './dniUI.js';
export const dniValidator = {


    validateNif : (dni) => {
        if (dniConfig.spanishDni.nifRegex.test(dni.value) && dni.value.length == 9) {
            let number = parseInt(dni.value.match(dniConfig.spanishDni.nifRegex));
            let letra = dniConfig.spanishDni.letras[number % 23]; 
            console.log("letter: " + letra);
            console.log("number: " + number);
            console.log("Valid number");

            if (letra === String(dni.value.match(dniConfig.spanishDni.nifLetterRegex))) {
                console.log("The letter also matches. Valid NIF");
                dniUI.correctDniMessage(dni.parentElement);
            }
        } else {
            console.log("Invalid number");
            dniUI.wrongDniMessage(dni.parentElement);
            console.log(dni.parentElement);
        }

    }

}