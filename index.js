// Index.js

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

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