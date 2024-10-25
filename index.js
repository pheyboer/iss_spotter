// Index.js

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP('99.227.221.244', (error, coordinates) => {
  if (error) {
    console.log('It did not work!', error);
    return;
  }

  console.log('It worked! Return Coordinates:', coordinates);
});


const exampleCoords = { latitude: '43.653226', longitude: '-79.3831843' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Return flyover times:', passTimes);
});