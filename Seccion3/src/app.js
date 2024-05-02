const { personBuilder } = require("./js-fundation/05-factory-functions");
const {
    getFullName,
  } = require("./plugins/faker.plugin");
  const { getAge } = require("./plugins/get-age.plugin");
  const { getUUID } = require("./plugins/uuid.plugin");
  const { formatBdate } = require("./utils");

require("./js-fundation/05-factory-functions");

const modules = {
    getAge,
    getFullName,
    getUUID,
    formatBdate,
};

const person = { name: "Fernando Herrera", birthdate: "1985-10-21" };
const randomPerson = personBuilder(modules)();
const fer = personBuilder(modules)(person);

console.log(fer);
console.log(randomPerson);