console.log('js biglietto treno');

// MILESTONE 1 - Scrivere un programma che chieda all’utente:

// Il numero di chilometri da percorrere (input)
const kmEl = document.getElementById('km')

// Età del passeggero (input)
const ageEl = document.getElementById('age')

// bottone genera
const generateBtnEl = document.getElementById('generateBtn')
console.log(kmEl, ageEl, generateBtnEl);

// La risposta finale (o output) da scrivere in console. 
generateBtnEl.addEventListener('click', function(){

    console.log('click');
    console.log(kmEl.value);
    console.log(ageEl.value);
    
})

/*
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/