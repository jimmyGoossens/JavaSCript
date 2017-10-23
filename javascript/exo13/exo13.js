//Exercice 1

/*var character = document.getElementById("character");


document.addEventListener("keypress", function (e) {
    
    
   
   switch (String.fromCharCode(e.charCode)) {
            
            case "1":character.style.color="blue";
                console.log("ok2");
                break;
            case "2":character.style.color="green";
                break;
            case "3":character.style.color="yellow";
                break;
            case "4":character.style.color="black";
                break;
            case "5":character.style.color="pink";
                break;
            case "6":character.style.color="purpule";
                break;
            case "7":character.style.color="red";
                break;
            case "8":character.style.color="grey";
                break;
            case "9":character.style.color="white";
                break;
       default: console.log(String.fromCharCode(e.charCode));
           
        
            }
    
});*/

//Exercice 2 
document.addEventListener("keydown" , function(e){
    
    var event = e.keyCode;
    if(event ==37 ||event == 38 || event==39 || event ==40 ){
        
        document.getElementById("up").className = "higlight";
        document.getElementById("down").className = "higlight";
        document.getElementById("right").className = "higlight";
        document.getElementById("left").className = "higlight";
        console.log("ok1");
    }
       
});


document.addEventListener("keyup" , function(e){
    
    var event = e.keyCode;
    if(event ==37 ||event == 38 || event==39 || event ==40 ){
        
        document.getElementById("up").removeAttribute("class");
        document.getElementById("down").removeAttribute("class");
        document.getElementById("right").removeAttribute("class");
        document.getElementById("left").removeAttribute("class");
        console.log("ok2");
    }
       
});