var langue = "es";
var langue2 = "en";
var langue3 = "fr";
var messag = "nojout";


if (langue === "es") {
    console.log("Hola, Mundo");
    
} else if (langue === "en") {
    console.log("Hello, world");
    
} else {
    console.log("bonjour, tout le monde");
    
}

//affichage des scores
var score = 3;
var result = 5;

if (score >= 90) {
    console.log("vous avez le rang A");
    
} else if (score < 90) {
    console.log("vous avez le rang B");
    
} else if (score <= 50) {
    console.log("bonjour, tout le monde");
}


//mettre au pluriel

var motSingulier = "bro";
var nbrMot = 2;
var results = 0;


if (nbrMot > 1) {
    console.log(motSingulier + "s");
}