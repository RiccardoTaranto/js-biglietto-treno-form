console.log('js biglietto treno');

// MILESTONE 1 - Scrivere un programma che chieda all’utente:

// Il numero di chilometri da percorrere (input)
const kmEl = document.getElementById('km')

// Età del passeggero (input)
const ageEl = document.getElementById('age')

// bottone genera
const generateBtnEl = document.getElementById('generateBtn')
console.log(kmEl, ageEl, generateBtnEl);

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const rateKm = 0.21

// La risposta finale (o output) da scrivere in console. 
generateBtnEl.addEventListener('click', function () {
    const km = Number(kmEl.value)
    const age = Number(ageEl.value)
    // console.log(km, age);

    let ticketRate = km * rateKm

    if (age < 18) {
        // applica sconto del 20% per i minorenni
        ticketRate *= 0.8
    } else if (age > 65) {
        // applica sconto del 40% per gli over 65
        ticketRate *= 0.6
    }

    console.log(ticketRate.toFixed(2));

})