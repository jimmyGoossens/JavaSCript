//Exercice 1
//faire disparaitre les divs au survol

var hover = document.getElementsByClassName('hoverMe');

console.log(hover);    
for (var i = 0; i<3; i++){
 
hover[i].addEventListener("click", function(){
    
    console.log("ok");
      this.parentElement.removeChild(this);
    });
   }
//Exercice 2

document.getElementById("reset").addEventListener("click", function(reset){
    
   for ( var i =0; i<3; i++){
       
       
       var divHover= document.createElement("div");
       divHover.className="hoverMe";
       this.parentElement.appendChild(divHover);
       console.log(divHover);
       
   } 

    
});

//Exercice3


document.addEventListener("mouseover", function(event){
    

    var axeX = event.clientX;
    var axeY = event.clientY;
    
    document.getElementsByTagName("span")[0].textContent= axeX;    
    document.getElementsByTagName("span")[1].textContent= axeY;
    
});