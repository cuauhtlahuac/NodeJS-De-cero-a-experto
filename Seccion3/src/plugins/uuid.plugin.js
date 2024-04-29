const crypto = require("crypto");

const getUUID = () => crypto.randomUUID();

module.exports = {
    getUUID,
}