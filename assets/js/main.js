/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti
e quali dei numeri da indovinare sono stati individuati.
*/

//seleziono elemento della dom
const containerEl = document.querySelector('.container');


//genero cinque numeri casuali
fiveRandom(5);


//funzione numeri casuali
function fiveRandom(howMany) {
    for (let i = 0; i < howMany; i++) {
        number = Math.floor(Math.random() * 100)
        containerEl.insertAdjacentHTML('afterbegin', `<div class="number">${number}</div>`);
    }
}