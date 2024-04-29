// faker docs: https://fakerjs.dev/guide/
const { faker } = require("@faker-js/faker");

const getFakeFullName = () => `${faker.person.fullName()}`;

const getFakeBirthdate = () =>
  `${faker.date.birthdate({ min: 18, max: 99, mode: "age" })}`;

module.exports = {
  getFakeFullName,
  getFakeBirthdate,
};
