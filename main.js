// start code

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    {
        nome: "Mountain Bike Classic",
        weight: 9
    },
    {
        nome: "Mountain Bike Energy",
        weight: 22
    },
    {
        nome: "Mountain Bike Blue",
        weight: 13
    }
]
// metodo 1
// console.log(bici);
// console.log(`la bici che pesa meno pesa ${bici[1].weight}kg ed è la ${bici[1].nome}`)

// metodo 2
function trovaMinore (arrayObj) {
    for (let i = 0; i < arrayObj.length; i++) {
        for (let x = i+1; x < arrayObj.length; x++) {
            if (arrayObj[i].weight <= arrayObj[x].weight) {
                if (x == (arrayObj.length - 1)) {
                    index = i;
                    x = arrayObj.length + 1;
                    i = arrayObj.length + 1;
                } else {
                    index = i;
                }
            } else {
                if ((x == (arrayObj.length - 1) && (i == (arrayObj.length - 2)))) {
                    index = x;
                } else {
                    x = arrayObj.length + 1;
                }
            }
        }
    }

    return index;
};
let index;
index = trovaMinore(bici);

console.log(`la bici che pesa meno pesa ${bici[index].weight}kg ed è la ${bici[index].nome}`)



// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function randomNum (min, max) {
    return Math.floor(Math.random() * max) + min;
}

let squadre = [
    {
        'nome': "Roma",
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        'nome': "Liverpool",
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        'nome': "Sassuolo",
        'punti fatti': 0,
        'falli subiti': 0
    }
];

for (let y = 0; y < squadre.length; y++) {
    squadre[y]["punti fatti"] = randomNum(0, 80);
    squadre[y]["falli subiti"] = randomNum(0, 20);
}



// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).