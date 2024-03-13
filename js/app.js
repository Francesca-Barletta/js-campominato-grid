/*Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, 
la cella cliccata si colora di azzurro ed emetto un messaggio 
in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, 
divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, 
con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, 
con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Consigli del giorno:
Andate per stemp.
Sono tutti problemi che avete gia affrontato singolarmente negli esercizi precedenti:
recuperare uno o più elementi dal DOM
stampare i numeri da 1 a 100
inserire n elementi nel DOM
aggiungere un click ad un elemento
aggiungere e togliere una classe ad un elemento
Questa volta però sono combinati insieme 
per formare un problema più articolato e complesso. 
Scomponiamo quindi il problema nei suoi sotto problemi più semplici.*/

console.log('campominato')
//devo recuperare dal dom la select
const selectElement = document.getElementById("difficolta")
const optionElement = selectElement.value
//devo recuperare dalla select la value
//a seconda della value, il pulsante play deve generare 3 grigle diverse
//devo recuperare dal dom il pulsante play 
const playButton = document.querySelector('.play');
//dargli la funzione addeventlistner e dirgli che al click deve generare una griglia quadrata
playButton.addEventListener('click', function () {
    //devo recuperare dal dom il div con classe grid
    const gridElement = document.querySelector('.grid');
    //devo creare una costante row che salva quante celle voglio in una riga
    //se la difficoltà è hard deve creare una griglia di 100 celle
    let row = 0
    if (selectElement.value === "hard") {
        row = 10
        gridElement.classList.add("hard")
    }
     if (selectElement.value === "normal") {
        row = 9
        gridElement.classList.add("normal")
    } else if (selectElement.value === "easy") {
        row = 7
        gridElement.classList.add("easy")
    }
    //devo creare una costante che genera un quadrato moltiplicando row al quadrato
    const gridBox = row ** 2;
    //dentro un ciclo for devo dare un numero per ogni casella
    for (let i = 0; i < gridBox; i++) {
        const number = i + 1;
        //console.log(number)
        //devo rendere visibili le singole celle della griglia
        //creo l'elemento div con creteelement
        const cellElement = document.createElement('div')
        //gli dò la classe che ho già creato su css
        cellElement.className = 'cell'
        //dentro inserisco il numero creato con in ciclo for
        cellElement.innerHTML = number
        //devo aggiungere al grid recuperato dal dom le celle
        gridElement.append(cellElement)
        //quando clicco una casella deve cambiare colore
        cellElement.addEventListener('click', function () {
            //se è già cliccata con .toggle ritorna com'era
            cellElement.classList.toggle('bg-dark')
        })

    }
})

