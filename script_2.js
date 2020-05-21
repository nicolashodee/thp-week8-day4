let monNumero =  prompt("Please enter a number : ");

function facto(inputNumber) {
  i=1
  let outputNumber = inputNumber
  while (i !== inputNumber-1) {
    outputNumber = outputNumber * (inputNumber - i);
    i++
  }
  return outputNumber; 
 }

 console.log(`La factorielle de ${monNumero} est : ` + facto(monNumero));



 