const  {getEmails,
    checkHobbies,
    checkStudent,
    checkIndividuals,
    printAge,
    getFirstHobby,
    printName_Email,
    logAllCityAndCountries} = require('./functions.js')
const dataset=require('./Mainfile.js')



 //    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
console.log(getEmails(dataset));


//   Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
console.log(checkHobbies(dataset));


//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
console.log(checkStudent(dataset,30));


//Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
console.log(checkIndividuals(dataset));

//    Implement a loop to access and print the ages of all individuals in the dataset.
console.log(printAge(dataset));


  //    Create a function to retrieve and display the first hobby of each individual in the dataset.
console.log(getFirstHobby(dataset));


 //    Write a function that accesses and prints the names and email addresses of individuals aged 25.
console.log(printName_Email(dataset,25));


 //    Implement a loop to access and log the city and country of each individual in the dataset.
console.log(logAllCityAndCountries(dataset));