// const { template } = require("./js-fundation/01-Template");
// require('./js-fundation/02-destructuring');
// require('./js-fundation/03-depuration')
const { getUserById } = require('./js-fundation/04-callbacks')

require('./js-fundation/05-factory-functions')

getUserById( 1, function(error, user){
    if(error){
        throw new Error(error)
    }

    console.log(user);
})
