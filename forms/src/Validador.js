import { InputMapper } from "./mapper/InputMapper.js"

export const operations = {
    "euro": Object.freeze(() => { console.log("Edito euros"); }),
    "date": Object.freeze(() => { console.log("Edito fecha"); })
}

export default class Validador {

    static validator = (inputs) => {

        InputMapper(inputs).forEach(input => {

           operations[input.type]();
        }
        )
    }

    static addValidation = (type, validation) => {
        if (type in operations || validation === undefined) {
            console.error("Operación ya definida o validación no definida");
            return;
        }
        else {
            operations[type] = validation;
            console.log("Operación añadida");
            console.log(operations);
        }
    }
}