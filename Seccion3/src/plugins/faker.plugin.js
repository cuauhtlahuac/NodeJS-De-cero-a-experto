// faker docs: https://fakerjs.dev/guide/
const { faker } = require("@faker-js/faker");

const getFullName = (name) => {
  return name ?? `${faker.person.fullName()}`;
};

const getBirthdate = (bdate) =>
  bdate ?? `${faker.date.birthdate({ min: 18, max: 99, mode: "age" })}`;

module.exports = {
  getFullName,
  getBirthdate,
};
