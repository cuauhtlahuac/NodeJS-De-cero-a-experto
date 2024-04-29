const dta = require("dob-to-age");

const getAge = (birthdate) => {
  if (!birthdate) return new Error("Birthdate is required");

  return dta(birthdate);
};

module.exports = {
  getAge,
};
