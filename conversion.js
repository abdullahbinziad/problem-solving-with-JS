
var convertFeetToInch= (myFeet)=>{
    myInch = (1/12)*myFeet; 
    document.write(myFeet + " feet = " + myInch + "Inch");
    return myInch ; 
}


var userFeet = prompt("input the feet value");
convertFeetToInch(userFeet);