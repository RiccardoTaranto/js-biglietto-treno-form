console.log('js biglietto treno');

// Scrivere un programma che chieda all’utente:

// Il numero di chilometri da percorrere (input)
const kmEl = document.getElementById('km')

// Età del passeggero (input)
const ageEl = document.getElementById('age')

// bottone genera
const generateBtnEl = document.getElementById('generateBtn')
console.log(kmEl, ageEl, generateBtnEl);

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const rateKm = 0.21

const formEl = document.querySelector('form')
const finalRateEl = document.getElementById('finalRate')

// La risposta finale (o output) da scrivere in console
formEl.addEventListener('submit', function (e) {
    e.preventDefault()
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

    console.log(`Prezzo finale: ${ticketRate.toFixed(2)} €`);
    // output del prezzo finale
    finalRateEl.innerHTML = `${ticketRate.toFixed(2)} €`


})


/* riprendere da MILESTONE 3:
add style  HTML e CSS in modo da renderla esteticamente gradevole.
*/