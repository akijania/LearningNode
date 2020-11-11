const os = require('os');
const fs = require('fs');
const genders = ['M', 'F'];
const maleNames = ['Piotr', 'Artur', 'Michał', 'Franciszek'];
const femaleNames = ['Anna', 'Krystyna', 'Wanda', 'Łucja'];
const lastNames = ['Seweryn', 'Pachnicki', 'Wielorak', 'Nowak'];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
let people = [];

for(let i=0; i<20; i++){
  const gender = randChoice(genders);

  let firstName = ''
  if(gender=='M'){
      firstName = randChoice(maleNames);
  } else {
      firstName = randChoice(femaleNames);
  }

  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random()*100);
  const email = `${firstName}.${lastName}@gmail.com`.toLowerCase();
  
  people.push({gender, firstName, lastName, age, email})
}
console.log(people);
people = JSON.stringify(people)
fs.writeFile('people.json', people, (err) => {
    if (err) throw console.log('Something went wrong');;
    console.log('File has been successfully generated! Check people.json');
  });