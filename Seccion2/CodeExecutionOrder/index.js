// tenemos tres setTimeOuts el primer tarda 3 segundos, los dos subsecuentes sólo tardarán cero

console.log('Inicio de programa'); // 1

setTimeout( () => {
    console.log('Primer Timeout'); // 5
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout'); // 3
}, 1 );


setTimeout( () => {
    console.log('Tercer Timeout'); // 4
}, 0 );

console.log('Fin de programa'); // 2