console.log("coucou depuis la console");

//commentaire sur une ligne 
/* commentaire
sur plusieurs lignes */

console.log("ceci n'est pas un commentaire");

// les variables sont generale;emt ecrites en CamelCase
// declarer une variable en JS: let 

let data1 = "variable en let definie dan sle bloc principal";
console.log(data1);
console.log(typeof data1);

{
  let data2 = "ceci est un test de data2";
  var data3 = "ceci est un test de data3";

}

console.log(data1);

console.log(data3);

let a=1, b=2;
a++
console.log(a);
console.log(b+=2);

let c="bonjour", d="pifou";
console.log(c + " " + d);
Number(5);
console.log(typeof Number(5));
console.log(typeof String(5)); // permet de connaitre le type de variable

let StatutDeThp = ["Moussaillon", "Corsaire", "Pirate"]; // definiir un array
console.log( StatutDeThp[0] );
console.log(StatutDeThp.length); // permet d'avoir la longueur de l'array

StatutDeThp[0] = "La mousaille"; //permet de modifier une entree
console.log( StatutDeThp[0] );

StatutDeThp.push("Flibustier"); //rajoute une entree a la fin de l'array
StatutDeThp.unshift("Couillon"); // rajoute une entree au debut
console.log(StatutDeThp);
StatutDeThp.pop() //suprimer le dernier element
StatutDeThp.shift(); //supprimer le premier element
console.log(StatutDeThp);

let NumStudent = 4;
let statement = `Dans mon groupe on est ${NumStudent} etudiants`; // afficher une variable dans un string avc la concatenation
console.log(statement);
console.log(`Thehackingproject`[0]); // affiche la premiere lettre du string
console.log(`The Hacking Project`.indexOf("Hack")); // affiche la position du mot "Hack" dans le string

let stringMAJ = "mon petIt cHeri";
console.log(stringMAJ.toUpperCase()); // met en majuscule 
console.log(stringMAJ.toLowerCase()); // met en minuscule

const ContentOfThp = "Git-Ruby-Rails-CSS-HTML-JS";
const lesson = ContentOfThp.split("-"); // permet de decouper un string an array de string en utilisant le - comme separateur
console.log(lesson);
console.log(lesson[0]);


let ThpSessionNum2 = { // on definit l'objet ThpSessionNum2 
  numOfMouss: 80, 
  cities: ["Paris", "Lyon", "Montpellier"], 
  successRate: 0.80,
  sessionMoto: "Keep pushing to the top" 
};

console.log("Il y a " + ThpSessionNum2.numOfMouss + " etudiants dans cette session"); // on affiche un attribut de ThpSessionNum2

ThpSessionNum2.numOfMouss = 79;
console.log(ThpSessionNum2.numOfMouss); // on modifie un attribut 
ThpSessionNum2.favoriteLesson = "Presentation de Sinatra" ; // on rajoute un attribut
console.log(ThpSessionNum2.favoriteLesson);

let AttributeName = "successRate"; 
console.log(ThpSessionNum2[AttributeName]); // autre facon d'afficher un attribut 

let weeksOfThpArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];
let weeksOfThpObject = {
  Semaine5: "Rails Intermediaire", 
  Semaine6: "Rails avance", 
  Semaine7: "HTML, CSS et intro au JS", 
  Semaine8: "Javascript de front"
};

console.log("******* Parcourons le Array : ");
for (let index in weeksOfThpArray) {
  console.log(index); 
  console.log(weeksOfThpArray[index]);
};

for (let weekAttribute in weeksOfThpObject) {
  console.log(weekAttribute);
  console.log(weeksOfThpObject[weekAttribute]);
}

console.log("*********** Parcourons le Array en foreach :"); 
weeksOfThpArray.forEach(weekContent =>  {console.log(weekContent)} );

function sayHello() {
  console.log("Bonjour toi !");
}

sayHello();

function multiply(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2; 
  return outputNumber;
}

console.log(multiply(4, 2)); 
console.log(multiply(2, multiply(2,2)));

//autre syntaxe, plus epuree
const multiply = (inputNumber1, inputNumber2) => {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}