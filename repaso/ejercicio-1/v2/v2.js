var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E', 'T'];

    let nifRegex = /[0-9]{8}/;
    let nifLetterRegex = /[A-Z]$/;
let dni = document.getElementById("dni");

dni.addEventListener('change', () => {


    if (nifRegex.test(dni.value) && dni.value.length == 9) {
        let number = parseInt(dni.value.match(nifRegex));
       let letra = letras[number % 23];
       console.log("letter: " + letra);
       console.log("number: " + number);
        console.log("Valid number");
        
        if (letra === String(dni.value.match(nifLetterRegex))) {
            console.log("The letter also matches. Valid NIF");
        }

    } else {
        console.log("Invalid number");
    }
  
})





function validateNif1(dni) {

}