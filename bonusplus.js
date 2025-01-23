const videogamesBonus = ["Elden Ring", "Fallout", "Dark Souls", "Cyberpunk 2077", "Sekiro", "Call of Duty", "Bloodborne", "Mafia", "Nightreign", "Assassin's Creed", "The Witcher", "Inscryption"];

let elencoVideogames = document.getElementById("elencoVideogames");

let colStyle = ["flex", "direction-col", "col", "centered-content"];
let colContentStyle = ["flex", "gap-20", "text-big", "centered-content"];

for (let i = 1; i <= videogamesBonus.length; i++) {

    let col = document.createElement("div");
    let colContent = document.createElement("div");
    let num = document.createElement("span");
    let text = document.createElement("p");

    for (let b = 0; b < colStyle.length; b++) {
        col.classList.add(colStyle[b]);
        colContent.classList.add(colContentStyle[b]);
        text.classList.add("hide");
    }

    col.classList.add("game");
    text.classList.add("gameName");

    num.append(i);
    text.append(videogamesBonus[i]);

    colContent.appendChild(num);
    colContent.appendChild(text);

    col.appendChild(colContent);

    elencoVideogames.appendChild(col);
}

// controllo videogiochi scelti

let btn = document.getElementById("check");
let error = document.getElementById("errorMessage");


btn.addEventListener('click', () => {

    event.preventDefault();

    // console.log("click funziona")

    let minUser = document.getElementById("rangeMin").value;
    let maxUser = document.getElementById("rangeMax").value;

    // console.log(minUser, maxUser)

    // controllo se num min è minore di max
    if (minUser > maxUser) {
        error.classList.remove("hide");
        error.innerHTML = "Inserisci un range positivo: min maggiore o uguale a max (es. 2-4)";

        setTimeout(() => {
            error.classList.add("hide");
        }, 7000);
    } else {
        //mostro risultati
        let games = document.querySelectorAll(".game");
        let gamesname = document.querySelectorAll(".gameName");
        // console.log("entro nell'else")        
        for (let m = 0; m < games.length; m++) {
            gamesname[m].classList.remove("hide");
            if ((m >= minUser) && (m <= maxUser)) {
                games[m].classList.add("win");
            } else {
                games[m].classList.add("lose");
            }
        }
    }

})