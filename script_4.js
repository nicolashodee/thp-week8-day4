const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// FONCTIONS

function filter_year(start_year, end_year) {
  let ageRange = [];

  for ( let i=0; i < entrepreneurs.length; i++) {
    if (entrepreneurs[i].year >= start_year && entrepreneurs[i].year <= end_year) {
      ageRange.push(entrepreneurs[i]);  
    }
  }
  return ageRange;
}




//PERSONNES NEES DANS LES 70s
console.log(`Les u†ilisateurs nes entre 1970 et 1979 sont :`);
console.log(filter_year(1970, 1979));


//NOM et PRENOM
fullName =[];
for (let i=0; i < entrepreneurs.length; i++) {
    fullName.push(`${entrepreneurs[i].first} ${entrepreneurs[i].last}`);    
}

console.log(fullName);

//AGE AUJOURdHUI
let current_year = 2020
for (let i=0; i < entrepreneurs.length; i++) {
  let age = current_year - entrepreneurs[i].year
  console.log(`${entrepreneurs[i].first} ${entrepreneurs[i].last} aurait ${age} ans aujourd'hui`);
}

//ORDRE ALPHABETIQUE
const sortedusers = entrepreneurs.sort(function(a, b) {
  let lastA = a.last.toUpperCase(); // ignore upper and lowercase
  let lastB = b.last.toUpperCase(); // ignore upper and lowercase
  if (lastA < lastB) {
    return -1; //lastA comes first
  }
  if (lastA > lastB) {
    return 1; // lastB comes first
  }
  return 0;  // names must be equal
});

console.log(sortedusers);