const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 10 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 0 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//FONCTION

function FindBookWithId(inputID) {
  let result = [];

  for ( let i=0; i < books.length; i++) {
    if (books[i].id === inputID ) {
      result.push(books[i]);  
    }
  }
  return result;
}


// tous les livres sont ils empruntes ?
let rented = false;
for (let i=0; i < books.length; i++) {
  if (books[i].rented !== 0) { 
    console.log(`${books[i].title} is rented`);
    rented = true;
  }
  else {
    console.log(`${books[i].title} is not rented`);
    rented = false; 
    break; }
}

console.log(`Les livres sont ils tous loues ? : ${rented}`);


//livre le plus loue
const sortedusers = books.sort(function(a, b) {
  let lastA = a.rented; // ignore upper and lowercase
  let lastB = b.rented; // ignore upper and lowercase
  if (lastA < lastB) {
    return -1; //lastA comes first
  }
  if (lastA > lastB) {
    return 1; // lastB comes first
  }
  return 0;  // names must be equal
});

console.log(sortedusers);

let smallest = sortedusers[0].title,                                      
    largest  = sortedusers[sortedusers.length - 1].title;


console.log('Less rented: ' + smallest);
console.log('Most rented: ' + largest);


//FIND A SPECIFIC BOOK 
console.log(FindBookWithId(873495));

//FIND a SPECIFIC BOOK AND DELETE IT
/*
books_new = books.splice(FindBookWithId(133712),1);

console.log(books_new);
*/




for( let i = 0; i < books.length; i++){ 
  if ( books[i].id === 133712) { books.splice(i, 1); }
}

const sortedbooks = books.sort(function(a, b) {
  let lastA = a.title.toUpperCase(); // ignore upper and lowercase
  let lastB = b.title.toUpperCase(); // ignore upper and lowercase
  if (lastA < lastB) {
    return -1; //lastA comes first
  }
  if (lastA > lastB) {
    return 1; // lastB comes first
  }
  return 0;  // names must be equal
});

console.log(sortedbooks);


