/*   charger le fichier "data.json" tip : xmlHttpRequest
ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
classer l'odre du tableau selon les scores tip : arr.sort()
mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
compter combien de personne viennent du "Bahrain" tip : filter()
afficher le plus grand score dans la console tip : sort()
afficher le plus petit score tip : sort()*/

/*
var xhr =  new xmlHttpRequest();
xhr.onload = function (event) {};

xhr.open("GET", "data.json",);

var newJsonFile = data.map(function(X){
    
    
    //itère à travers le tableau d'objets json et rajoute un score à chaque truc
    for (var i; i<data.legth;i++){
        
        
        
        //objet[i] add scoreAleatoire
        
        }
    //classer le tableau d'objets json
    
    
    //categories 
    
});
*/

var xhr =  new XMLHttpRequest();
xhr.onload = function (event) {
 var data = xhr.response;   
var dataBase = JSON.parse(this.responseText);
console.log(dataBase[0]);    
    console.log("bordel");
        for(var i = 0 ; i<100;i++){
        
        dataBase[i].note= Math.random()*1000;
               console.log(dataBase[i].note);
    }
       console.log(dataBase);
    dataBase.sort(dataBase.note);
    console.log(dataBase.sort(dataBase.note));
    
    var gradeA =[];
    var gradeB = [];
    var gradeC = [];
 /*   for (var i =0; i<100; i++){
    
        switch(true)
        case(dataBase[i].note > 750): gradeA.push(dataBase[i]);
            breack;
        case(database[i].note<=750):gradeB.push(dataBase[i]);
            breack;
        case (dataBase[i].note <500):gradeC.push(dataBase[i]);
            braeck;
        default : console.log("FDP");
            breack;
    }*/

     
        forEach(pays in dataBase){
        var compte = 0;
        if (dataBase.country == "Bahrain"){
                compte++
        }
                console.log(compte);
        }
 
 
};
xhr.open('GET', 'data.json',true);
xhr.send();
