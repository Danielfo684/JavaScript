let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E', 'T'];


let dni = document.getElementById("dni");
document.getElementById('dni-submit').addEventListener('click', () => {
    console.log(letras[parseInt(dni.value) % 23]);
})


