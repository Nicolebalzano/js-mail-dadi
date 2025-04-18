// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//RACCOLTA DATI mail
// mail della lista
// mail richiesta all'utente
//messaggio stampato finale


//ELABORAZIONE LOGICA mail
//Crea un array con la lista delle mail che possono accedere
// Prompt che chiede all'utente la sua mail
// Controlla che la mail inserita dall'utente sia nella lista
//Stampa messaggio del risultato della ricerca

// OUTPUT mail
// const mailList = ["Nicolebalzano@gmail.com", "Lauraparesi01@gmail.com", "Lorenzomassi@gmail.com", "carloaresi10@gmail.com", "swamy12@gmail.com", "kauastella@gmail.com", "anabelfiore@gmail.com", "manfredi99@gmail.com", "maria22@gmail.com", "juju33@gmail.com"];
// const inserisciMail = prompt("Inserisci qui la tua mail");



// for(let i = 0; i < mailList.length; i++) {
//     const curMail = mailList[i];
//     console.log(curMail);
//     if (curMail === inserisciMail) {
//      let messageFound = "Mail trovata";
//      console.log(messageFound);

//         break;
//     } else {
//         let messageNotFound = "Mail non trovata";
//         console.log(messageNotFound);

//     }
//     }


// RACCOLTA DATI dado
// numero random computer
// numero random giocatore

// ELABORAZIONE LOGICA dado
// 1) genera un numero random per il giocatore
// 2) genera un numero random per il computer
// 3) confronta i numeri generati in base al punteggio più alto determina il vincitore

// OUTPUT dado
let randomNumberGamer = Math.floor(Math.random() *10) +1;
console.log("Numero giocatore 1:" + " " + randomNumberGamer);
let randomNumberComputer = Math.floor(Math.random() * 10) +1;
console.log("Numero computer:" + " " + randomNumberComputer);
if (randomNumberGamer > randomNumberComputer) {
    console.log("Risultato: Giocatore 1 vince");
} else if (randomNumberGamer === randomNumberComputer) {
    console.log("Risultato: Pareggio");
} else {
    console.log("Risultato: Computer vince");
}
