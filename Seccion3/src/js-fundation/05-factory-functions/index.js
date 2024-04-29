const {
  getFakeFullName,
  getFakeBirthdate,
} = require("../../plugins/faker.plugin");
const { getAge } = require("../../plugins/get-age.plugin");
const { getUUID } = require("../../plugins/uuid.plugin");

const buildPerson = ({ name, birthdate: bdate } = {}) => {
  const birthdate = bdate ?? getFakeBirthdate();
  const _bdate = new Date(birthdate);
  const formatedBdate = new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(_bdate);

  return {
    id: getUUID(),
    name: name ?? getFakeFullName(),
    birthdate: formatedBdate,
    age: getAge(formatedBdate),
  };
};

const person = { name: "Fernando Herrera", birthdate: "1985-10-21" };

const randomPerson = buildPerson();
const fer = buildPerson(person);

console.log(fer);
console.log(randomPerson);
