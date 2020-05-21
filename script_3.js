
let floor = String(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu mon pifou?"));
console.log(`Tu as demande ${floor} etages :`);
let diese = "#"
let empty_space = " "

console.log("Voici la pyramid descendante :");
for (i=1; i<=floor; i++) {
  console.log(`${diese.repeat(i)}`);
}


console.log("Voici la pyramid montante :");
for (i=1; i<=floor; i++) {
  console.log(`${empty_space.repeat(floor-i)}${diese.repeat(i)}`);
}

