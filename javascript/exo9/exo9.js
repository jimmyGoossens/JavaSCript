/*


Déclarez les variables suivantes :

Variable qui sera utilisée pour afficher un message
Variable qui va compter le nombre d'essais
Variable de la valeur minimum qu'on peut entrer (ici 20)
Variable de la valeur maximale qu'on peut entrer (ici 80)
Déclarez les fonctions suivantes :

crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale et la variable maximale
crée une fonction
qui prends un argument pour tester si le numéro qu'on a entré est le bon
la fonction retourne un de ces 3 messages : C'est plus, C'est moins,C'est juste tu as trouvé en X coups
Utiliser la console ou les fonctions natives suivantes :

window.prompt();
window.alert();
window.confirm();*/


var message = "";
var compteurErreur=0;
var valMin = 20 ;
var valMax = 80;

var aleatoire = function(valMax,valMin){
    
    
    var a = Math.round(Math.random()*(80-20))-20;
    
    return a ;
    
}
var test = function(){};