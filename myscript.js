// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.


// let studente = {

//     "nome" : "Nicola",
//     "cognome" : "Rossi",
//     "eta" : 25,

// }

// for (let proprieta in studente) {
//     console.log(proprieta);
//     console.log(studente[proprieta])
// }


// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

let oggettiDiStudenti = [

    {
        "nome" : "Antonio",
        "cognome" : "Rossi",
        "eta" : 40,
    },

    {
        "nome" : "Chiara",
        "cognome" : "Scura",
        "eta" : 20,
    },

    {
        "nome" : "Pasquale",
        "cognome" : "Lanni",
        "eta" :31,
    },

]

for (let i = 0; i < oggettiDiStudenti.length; i++) {

    let oggettoAttuale = oggettiDiStudenti[i];
    // console.log(oggettoAttuale)

    let nomeStudente = oggettoAttuale["nome"];
    let cognomeStudente = oggettoAttuale["cognome"];

    console.log(nomeStudente + " " + cognomeStudente);
   
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
// inserendo nell’ordine: nome, cognome e età.

let nuovoOggettoStudente = [

    {
        "nome" : "",
        "cognome":"",
        "eta" : "",
    }

]

// console.log(nuovoOggettoStudente)

nuovoOggettoStudente.nome = prompt("Inserisci un nome");
nuovoOggettoStudente.cognome = prompt("Inserisci un cognome");
nuovoOggettoStudente.eta = prompt("Inserisci un età");

// console.log(nuovoOggettoStudente)

console.log("Il nuovo studente inserito è: " + nuovoOggettoStudente.nome + " " + nuovoOggettoStudente.cognome + ", " + nuovoOggettoStudente.eta )
