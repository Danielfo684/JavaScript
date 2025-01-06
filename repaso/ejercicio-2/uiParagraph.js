
export const uiParagraph = {

    init: () => {
        let editable = document.querySelectorAll('.parrafo');

        editable.forEach((element) => {
            uiParagraph.paragraphSetting(element);
        });
    },


    paragraphSetting: (element) => {

        let editButton = uiParagraph.createButton(element, "Edit");
        let okeyButton = uiParagraph.createButton(element, "OK");
        let noButton = uiParagraph.createButton(element, "CANCEL");

        let newParagraphButton = uiParagraph.createButton(element, "New");




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
            uiParagraph.resetParagraph(nota, parrafo, noButton, okeyButton, editButton);
            nota.querySelector('.text-area').remove();

        });

        okeyButton.addEventListener('click', (event) => {
            let nota = editButton.parentElement;
            let parrafo = nota.querySelector('p');
            let textArea = nota.querySelector('.text-area');
            uiParagraph.resetParagraph(nota, parrafo, noButton, okeyButton, editButton);
            parrafo.textContent = textArea.value;

            nota.querySelector('.text-area').remove();

        });

        newParagraphButton.addEventListener('click', (event) => {
            let newParagraph = document.createElement('div');
            newParagraph.classList.add('parrafo');
            let editableParagraph = document.createElement('p');
            editableParagraph.classList.add('parrafo-editable');
            newParagraph.appendChild(editableParagraph);
            let addedParagraph = element.parentNode.insertBefore(newParagraph, element);
            uiParagraph.paragraphSetting(addedParagraph);
        });
    },


    createButton: (element, buttonType) => {
        let button = document.createElement('div');
        button.appendChild(document.createTextNode(buttonType));
        button.classList.add('button');
        switch (buttonType) {
            case "Edit":
                button.classList.add('button-edit');
                break;
            case 'OK':
                button.classList.add('button-ok');
                break;
            case 'CANCEL':
                button.classList.add('button-no');
                break;
            case 'New':
                button.classList.add('button-new');
                break;
        }
        element.appendChild(button);
        return button;

    },


    resetParagraph: (nota, parrafo, noButton, okeyButton, editButton) => {
        parrafo.style.display = "block";
        noButton.style.display = "none";
        okeyButton.style.display = "none";
        editButton.style.display = "block";
    }

}