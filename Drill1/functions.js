const dataSet = require("./Mainfile.js");

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function getEmails(data) {
  let allEmails = [];
  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  } else {
    const emails = data.map((ele) => ele.email);
    if (emails.length) {
      return emails;
    }
    return "Email Not Found";
  }
}
//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function checkHobbies(data, age) {
  let allHobbies = [];

  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  }

  for (let i of data) {
    if (i.age < 0 || !i.hobbies || !i.age) {
      continue;
    } else if (i.age === age) {
      allHobbies.push(
        `${i.name}'s age is ${i.age} and Hobbies are ${i.hobbies.join(", ")}`
      );
    }
  }

  return allHobbies.length > 0 ? allHobbies : `No one  found`;
}

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function checkStudent(data) {
  let allStudent = [];

  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  } else {
    for (let i of data) {
      if (i.isStudent === true && i.country === "Australia") {
        allStudent.push(i.name);
      } else {
        continue;
      }
    }
  }

  if (allStudent.length > 0) {
    return allStudent;
  } else {
    return "No students found in Australia";
  }
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function checkIndividuals(data) {
  if (!Array.isArray(data) || data.length <= 3) {
    return "Invalid dataset or not enough elements";
  } else {
    return data[2];
  }
}

// Implement a loop to access and print the ages of all individuals in the dataset.

function printAge(data) {
  let ageArr = [];
  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  } else {
    for (let i of data) {
      if (!i.age) {
        continue;
      } else {
        ageArr.push(` ${i.name}'s age ${i.age}`);
      }
    }
  }
  return ageArr;
}

// Create a function to retrieve and display the first hobby of each individual in the dataset.

function getFirstHobby(data) {
  let allFirstHobbies = [];

  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  }

  for (let i of data) {
    if (!i.hobbies || i.hobbies.length === 0) {
      continue;
    } else {
      allFirstHobbies.push(i.hobbies[0]);
    }
  }

  return allFirstHobbies.length > 0 ? allFirstHobbies : "No hobbies found";
}

//  Write a function that accesses and prints the names and email addresses of individuals aged 25.

function printName_Email(data, age) {
  let container = [];
  if (!Array.isArray(data) || data.length === 0) {
    return "Invalid dataset";
  } else {
    for (let i of data) {
      if (!i.age || age < 0 || i.age!=age) {
        continue;
      } else {
        container.push(`${i.name} and ${i.email}`);
      }
    }
  }
  return container.length > 0 ? container : "Not found name and email with age 25";
}


 //    Implement a loop to access and log the city and country of each individual in the dataset.


  function logAllCityAndCountries(data) {
    if (!Array.isArray(data) || data.length === 0) {
        return "Invalid dataset";
      }
      else{
        for(let i of data){
            console.log(
                `${i.name}'s city: ${i.city}, country: ${i.country}`
              );
        }
      }
    
  };



module.exports = {
  getEmails,
  checkHobbies,
  checkStudent,
  checkIndividuals,
  printAge,
  getFirstHobby,
  printName_Email,
  logAllCityAndCountries,
};
