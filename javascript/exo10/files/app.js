/*sélectionner le body

lui retirer la classe "bg-aqua"

lui ajouter la classe "bg-olive"

sélectioner first-paragraph

lui retirer les classes "bg-lime" et "gray"

lui ajouter la class "aqua"

sélectionner tous les éléments qui ont la classe 'bg-silver'

modifier tout ces éléments en leurs ajoutant la classe "bg-teal"

modifier tout ces éléments en leurs supprimant la classe "bg-silver"

sélectionne tous les éléments de type 'blockquote'

modifier tout ces éléments en leurs ajoutant la classe "bg-white"
    
 */

document.getElementsByTagName("body")[0].removeAttribute("class");
document.getElementsByTagName("body")[0].setAttribute("class", "bg-olive");
document.getElementById("first-paragraph").removeAttribute("class");
document.getElementById("first-paragraph").setAttribute("class", "aqua");


document.getElementsByClassName("bg-silver").className = "bg-silver bg-teal";


document.getElementsByClassName("bg-silver").className = "bg-teal";

    
document.getElementsByTagName("blockquote")[0].className = "bg-white";    


