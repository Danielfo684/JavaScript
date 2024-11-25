export const deckBuilder = {
    deckShuffle: () => {
        const container = document.getElementById('cards-container');
        const cards = Array.from(container.children);
        for (let i = 0; i < 10; i++) {
            for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                container.appendChild(container.removeChild(cards[j]));
            }
        }
    },
    spanishDeck: () => {
        ["espada", "oro", "basto", "copa"].forEach((suit) => {

            // Selecciona el contenedor
            const cardsContainer = document.getElementById('cards-container');


            // Genera 40 cartas
            let cardNum = 0;
            for (let i = 1; i <= 10; i++) {
                const card = document.createElement('div'); // Crea un div
                card.classList.add('card'); // Añade la clase "card"

                const cardTextTop = document.createElement('div');
                cardTextTop.classList.add('card-text-top');

                const cardTextBottom = document.createElement('div');
                cardTextBottom.classList.add('card-text-bottom');

                card.id = `card-${i}`; // Asigna un ID incremental

                //data-values
                card.setAttribute('data-suit', suit);
                card.setAttribute('data-value', i);

                //asigna una imagen de fondo para la carta
                switch (suit) {
                    case 'basto':
                        card.style.backgroundImage = 'url("images/as-bastos.png")';
                        break;
                    case 'copa':
                        card.style.backgroundImage = 'url("images/copa.jpg")';
                        break;
                    case 'espada':
                        card.style.backgroundImage = 'url("images/espadas.jpg")';
                        break;
                    case 'oro':
                        card.style.backgroundImage = 'url("images/oro.jpg")';
                        break;
                }
                cardNum++;


                if (cardNum > 10) {
                    cardNum = 1;
                }

                //Estructura html de la carta
                cardsContainer.appendChild(card);
                cardTextTop.textContent = `${cardNum}`;
                card.appendChild(cardTextTop);

                cardTextBottom.textContent = `${cardNum}`;
                card.appendChild(cardTextBottom);
            }
        })
    },
    frenchDeck: () => {
        ["pica", "corazon", "rombo", "trebol"].forEach((suit)=>{
           
// Selecciona el contenedor
            const cardsContainer = document.getElementById('cards-container');

            //Genera 52 cartas
            let cardNum = 0;
            for (let i = 1; i <= 13; i++) {
                const card = document.createElement('div'); // Crea un div
                card.classList.add('card'); // Añade la clase "card"

                const cardTextTop = document.createElement('div');
                cardTextTop.classList.add('card-text-top');

                const cardTextBottom = document.createElement('div');
                cardTextTop.classList.add('card-text-bottom');

                card.id = `card-${i}`; // Asigna un ID incremental

                //data-values
                const suitIndex = Math.floor((i - 1) / 10);
                card.setAttribute('data-suit', suit);
                switch (i) {
                    case 1:
                        card.setAttribute('data-value', 'A');
                        break;
                    case 11:
                        card.setAttribute('data-value', 'J');
                        break;

                    case 12:
                        card.setAttribute('data-value', 'Q');
                        break;

                    case 13:
                        card.setAttribute('data-value', 'K');
                        break;

                    default:
                        card.setAttribute('data-value', i);
                }

                //asigna una imagen de fondo para la carta
                switch (suit) {
                    case 'corazon':
                        card.style.backgroundImage = 'url("images/corazon.png")';
                        break;
                    case 'pica':
                        card.style.backgroundImage = 'url("images/pica.png")';
                        break;
                    case 'rombo':
                        card.style.backgroundImage = 'url("images/rombo.png")';
                        break;
                    case 'trebol':
                        card.style.backgroundImage = 'url("images/trebol.png")';
                        break;
                }
                cardNum++;
                if (cardNum > 13) {
                    cardNum = 1;
                }


                //Estructura html de la carta
                cardsContainer.appendChild(card);
                cardTextTop.textContent = `${cardNum}`;
                card.appendChild(cardTextTop);
                cardTextBottom.textContent = `${cardNum}`;
                card.appendChild(cardTextBottom);
            }
        }
        )
    }
    // basicCardStructure: () => {}
}