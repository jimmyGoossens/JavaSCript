//pair et impair
for (var i = 0; i<20; i++){
   
    if (i%2 ===0)
    console.log(i + " est pair");
}

//multiplication Tables

for (var i = 0;i < 10; i++) {
    var result = 9* i;
    console.log( i + "* 9 =" + result );
}

//Assigner des grades

for (var i = 0; i < 100 ; i++) {
    var score =i ; 
    var grade;
    
    if (score >= 90) {
        
        grade = "A";
        console.log(grade);
        
    }else if (score >= 80 && score < 90) {
        
        grade = "B";
        console.log(grade);
    }else if (score >= 70 && score < 80) {
        
        grade = "C";
        console.log(grade);
    }else if (score >= 65 && score < 70) {
        
        grade ="D";
        console.log(grade);
    }else {
        
        grade = "F";
    }
    
}



//Pyramides

for (var i = 0; i < 6; i++) {
    
    console.log(".")
}