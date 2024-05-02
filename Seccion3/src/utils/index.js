const { getBirthdate } = require("../plugins/faker.plugin");

const formatBdate = (bdate) => {
  const birthdate = getBirthdate(bdate);
  const _bdate = new Date(birthdate);

  return new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(_bdate);
};

module.exports = {
  formatBdate,
};
