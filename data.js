const data = require("./data/data.json");

function getData() {
  return data;
}

console.log(data);

module.exports = { getData };
