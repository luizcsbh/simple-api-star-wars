const request = require("request");

const hostname = "https://swapi.dev/api/";
const path = "planets/1/";

request(`${hostname}${path}`, (err, res, body) => {
  console.log(body);
});
