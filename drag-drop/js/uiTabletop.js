export const uiTabletop = {

    spanishCinquillo: (dropSection) => {
    document.querySelectorAll(dropSection).forEach((suit) => {
        const title = document.createElement('h2'); // Crea un div
        title.textContent(`${suit.id}`);
    })
}
}