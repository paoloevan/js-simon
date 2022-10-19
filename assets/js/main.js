/*
Visualizzare in pagina 5 numeri casuali.

Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono 

e l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti
e quali dei numeri da indovinare sono stati individuati.
*/

//seleziono elemento della dom
const containerEl = document.querySelector('.container');
const timerEl = document.querySelector('.timer');

//genero cinque numeri casuali e li inserisco in array
const numbers = arrayRandom(5);
console.log(numbers, 'pc numbers');

//cancello i numeri dopo 30 secondi
clearNumber();

//genero 5 prompt dopo 30 secondi e verifico se sono indovinati
const myNumbers = myNumbersPrompt();
//console.log(myNumbers, 'my numbers');

//emetto messaggio in console











//funzione numeri casuali
function arrayRandom(howMany) {
    const numbers = [];
    while (numbers.length < howMany) {
        let number = Math.floor(Math.random() * 100);
        if (!numbers.includes(number)){
            containerEl.insertAdjacentHTML('afterbegin', `<div class="number">${number}</div>`);
        numbers.push(number);
        }
    }
    return numbers;
}


//funzione timer e cancellazione numeri
function clearNumber() {
    let seconds = 31;
    const intervalId = setInterval(function () {
        seconds--;
        console.log(seconds);
        if (seconds == 0) {
            clearInterval(intervalId);
            const numberList = document.querySelectorAll('.number');
            for (let i = 0; i < numberList.length; i++) {
                numberList[i].style.display = 'none';
            }
        }
    }, 1000);
}

//funzione per verificare numeri indovinati e contarli
function myNumbersPrompt() {
    let seconds = 32;
    const myNumbers = [];
    const intervalId = setInterval(function () {
        seconds--;
        if (seconds == 0) {
            clearInterval(intervalId);
            for (let i = 0; i < 5; i++) {
                let myNumber = Number(prompt('inserisci numero'));
                if (numbers.includes(myNumber)) {
                    myNumbers.push(myNumber);
                }
            }
            console.log('numeri indovinati', myNumbers);
            console.log('quanti numeri indovinati', myNumbers.length);

        }
    }, 1000);
}
