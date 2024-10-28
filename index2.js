const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

fetchMyIP()
  .then((ip) => fetchCoordsByIP(ip))
  .then((coords) => fetchISSFlyOverTimes(coords))
  .then((body) => console.log(body));