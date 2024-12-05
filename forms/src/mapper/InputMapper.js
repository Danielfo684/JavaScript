import { operations } from "../Validador.js";

export const InputMapper = (inputs) => {
    return [...inputs].map( item => {

        for (let key in operations) {
            if (item.classList.contains(key)) return {
                "type" : key,
                "object": item
            }
        }
        return null;
    }).filter(item => item !== null);
}