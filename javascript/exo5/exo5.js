//addition
var tabAddition = [1,2,3,4,5,6,7,8,9];
var sum =0;
for (var i = 0; i < 9; i++) {
    
    sum = sum + i; 
    console.log(sum);
}

//vos meilleurs choix

var acteurs = ["brad pitt", "georges clooney", "marion cotillard"];
var grade = ["premier", "deuxième","troisième"];

for (var i = 0; i <3; i++){
    
    console.log("le " + grade[i] +" est " +acteurs[i] );
}

//clone

var nameTab = ["Mario", "Luigi", "Peach"];

var newTab = nameTab.push("bowser");