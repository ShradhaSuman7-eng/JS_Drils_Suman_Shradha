const {
  findCarId,
  findLastCar,
  sortCarModels,
  getCarYears,
  findCarsOlderThan2000,
  findBMWAndAudiCarsfromData,
} = require("./function.js");

const dataset = require("./Data.js");

// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
findCarId(dataset, 33);

// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
console.log(findLastCar(dataset));

// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
console.log(sortCarModels(dataset));

// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
console.log(getCarYears(dataset));

// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
console.log(findCarsOlderThan2000(dataset));

// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
console.log(findBMWAndAudiCarsfromData(dataset));
