/*let charachter ={
    
    
    name:"Jimmy",
    age:24,
    itemsToGive:["gold", "stone", "sword"],
    giveItem : function (){
        
    var aleatoire = Math.round(Math.random()*(2-0))-0;
        
        console.log(charachter.itemsToGive[aleatoire]);
    }
};
for(let key in charachter){
    
    
    console.log(charachter[key]);
}
charachter.giveItem();*/

//Exercice Shop

/*class Store {
    
    constructor(title, physic, magic, minLevel, available ){
        
        this.title= title;
        this.physic = physic;
        this.magic= magic;
        this.minLevel= minLevel;
        this.available= available;
        }
            };

let sword = new Store("sword",5,6,7, true);
let shield = new Store("shield", 3, 6, 12, false);
let axe = new Store("axe", 10, 4,8, true);
var shop = [sword, shield, axe];

var afficherTout = function(shop){
    
    for (let key in shop){
        
        console.log(shop[key]);
    }
}

var afficherAvailable = function(shop){
    
    for (let key in shop){
        
        if(shop[key].available == true){
            console.log(shop[key]);  

            }
         }
    }

var afficherLevel = function(shop){
    
    for (let key in shop){
        
        if(shop[key].minLevel >= 10){
            
            console.log(shop[key]);
        }
    }
}
afficherTout(shop);
afficherAvailable(shop);
afficherLevel(shop);*/


//------------------------------------------------------------------------------------------------------------

//Exercice Personnage

var mainCharacter = {
    
    name:"jimmy",
    level:3,
    life:6,
    weapon : {
    
    name:"axe",
    damage : 23
    },
    attack : function(mainCharacter){
        
        var totalDamage = mainCharacter.weapon.damage * mainCharacter.level;
        return mainCharacter.name + " attaque avec l'arme " + mainCharacter.weapon
                   .name + " les dégats sont de " +totalDamage ;
    }
    
    
    
};

console.log(mainCharacter.attack(mainCharacter));