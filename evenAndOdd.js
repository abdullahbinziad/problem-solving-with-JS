 var isevenOrOdd =(userInput)=>{
    var result = userInput%2; 
var theFinal =  result == 0 ? " Is a Even Number" :  "  Is a Odd Number" ;
  return ` ${userInput}, ${theFinal} ` ;  

 }

 document.write( isevenOrOdd(prompt("Input the Valu You Want")));