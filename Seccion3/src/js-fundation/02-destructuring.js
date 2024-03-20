// console.log( process );

// console.log( process.env );
const { SHELL, HOMEBREW_PREFIX } = process.env;

// console.log({SHELL});

const characters = ['flash', 'batman', 'superman']

const [_, __, superman] = characters;

console.log(superman)