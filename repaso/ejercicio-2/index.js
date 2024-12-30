


let editable = document.querySelectorAll('.note');

editable.forEach((element) => {
    let editButton = document.createElement('div');
    editButton.appendChild(document.createTextNode('Edit'));
    editButton.classList.add('button');
    editButton.classList.add('button-edit');

    element.appendChild(editButton);

    let okeyButton = document.createElement('div');
    okeyButton.appendChild(document.createTextNode('OK'));
    okeyButton.style.display = "none";
    okeyButton.classList.add('button');
    okeyButton.classList.add('button-ok');

    element.appendChild(okeyButton);

    let noButton = document.createElement('div');
    noButton.appendChild(document.createTextNode('CANCEL'));
    noButton.classList.add('button-no');
    noButton.style.display = "none";
    noButton.classList.add('button');
    element.appendChild(noButton);

    editButton.addEventListener('click', (event) => {
        event.preventDefault();
        noButton.style.display = "block";
        okeyButton.style.display = "block";
        editButton.style.display = "none";

        let nota = editButton.parentElement;
        let parrafo = nota.querySelector('p');
        parrafo.style.display = "none";
        let textArea = document.createElement('textarea');
        textArea.classList.add('text-area');
        textArea.innerHTML = parrafo.textContent;
        // textArea.appendChild(document.createTextNode(parrafo.textContent));
        nota.appendChild(textArea);
    })

    noButton.addEventListener('click', (event) => {
        let nota = editButton.parentElement;
        let parrafo = nota.querySelector('p');
        parrafo.style.display = "block";
        noButton.style.display = "none";
        okeyButton.style.display = "none";
        editButton.style.display = "block";
        nota.querySelector('.text-area').remove();
    })

    okeyButton.addEventListener('click', (event) => {
        let nota = editButton.parentElement;
        let parrafo = nota.querySelector('p');
        let textArea = nota.querySelector('.text-area');
        parrafo.style.display = "block";
        noButton.style.display = "none";
        okeyButton.style.display = "none";
        editButton.style.display = "block";
        parrafo.textContent = textArea.value;
        nota.querySelector('.text-area').remove();


    })
});


