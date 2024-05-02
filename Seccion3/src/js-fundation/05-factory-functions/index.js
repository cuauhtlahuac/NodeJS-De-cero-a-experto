const personBuilder = ({
  getUUID,
  formatBdate,
  getAge,
  getFullName,
}) => ({ name, birthdate: bdate } = {}) => {
  return {
    id: getUUID(),
    name: getFullName(name),
    birthdate: formatBdate(bdate),
    age: getAge(formatBdate(bdate)),
  };
};

module.exports = {
  personBuilder,
}
