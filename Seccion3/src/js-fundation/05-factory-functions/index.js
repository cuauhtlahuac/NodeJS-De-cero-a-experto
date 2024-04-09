const dta = require('dob-to-age');
const crypto = require('crypto');

const buildPerson = ({ name, birthdate }) => {
    return {
        id: crypto.randomUUID(),
        name,
        birthdate,
        age: dta(birthdate),
    }    
}

const person = {name: "Roku", birthdate: '1985-10-21'};

const roku = buildPerson(person);

console.log(roku);