var bonjour = ["B", "O", "N", "J", "O", "U", "R"];
var guestWord = ["_", "_", "_", "_", "_", "_", "_"];
var proposition = prompt("choisissez une lettre");

var pendu = function(bonjour,proposition,guestWord){
    

    
while (guestWord != bonjour){//while pas perdu ou pas gagner
    
      
        for (var i = 0; i< bonjour.length; i++){//while 
    
    //trouver un comparateur plus efficace
            //la boucle n'itère pas assez
            
            if (bonjour[i] == proposition){

                guestWord[i] = bonjour[i];
                  console.log(guestWord[i]);
                
               proposition =  prompt("correct, trouvez la prochaine");
                //essayer en utilisant les index
              
            }else {

        proposition = prompt("incorrect, veuillez réessayer");

            }
    }
    
}
    alert("bravo vous avez réussi");
       }
pendu(bonjour, proposition, guestWord);
