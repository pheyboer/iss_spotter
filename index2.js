const { nextISSTimesForMyLocation } = require('./iss_promised');
//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

// fetchMyIP()
//   .then((ip) => fetchCoordsByIP(ip))
//   .then((coords) => fetchISSFlyOverTimes(coords))
//   .then((body) => console.log(body));

const printPassTime = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

// Call

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTime(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });