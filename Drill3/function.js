// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:

function findCarId(data, id) {
  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      console.log(
        `Car ${id}  is a ${data[i].car_year} ${data[i].car_make}  ${data[i].car_model}`
      );
    }
  }
}

// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:

function findLastCar(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  }
  console.log(
    `Last car is a ${data[data.length - 1].car_make} and model is ${
      data[data.length - 1].car_model
    }`
  );
}

// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function sortCarModels(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  }

  const sortedModels = data.map((car) => car.car_model).sort();
  console.log(sortedModels);
}

// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
function getCarYears(data) {
  var years = [];
  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  } else {
    for (let i = 0; i < data.length; i++) {
      years.push(data[i].car_year);
    }
    console.log(years);
  }
}

// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function findCarsOlderThan2000(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  } else {
    let olderCarsCnt = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].car_year > 2000) {
        olderCarsCnt++;
      }
    }
    console.log(`There are  ${olderCarsCnt} cars older than the year 2000.`);
  }
}

//

// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
function findBMWAndAudiCarsfromData(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  } else {
    let bmwAndAudiCars = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].car_make === "BMW" || data[i].car_make === "Audi") {
        bmwAndAudiCars.push(data[i]);
      }
    }
    console.log(JSON.stringify(bmwAndAudiCars, null, 2));
  }
}

module.exports = {
  findCarId,
  findLastCar,
  sortCarModels,
  getCarYears,
  findCarsOlderThan2000,
  findBMWAndAudiCarsfromData,
};
