const fs = require('fs');

const content = fs.readFileSync("README.md", 'utf-8');

const wordCounter = content.split(" ");

const reactWordCounter = content.match(/react/ig);

console.log("Palabras: ", wordCounter.length);
console.log("Palabras React: ", reactWordCounter.length);

