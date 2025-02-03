// Q1 Find all users who are interested in playing video games.
const dataset = require("./Data.js");
function checkVideoGamePlayer(data) {
  let result = [];

  if (
    typeof data !== "object" ||
    data === null ||
    Object.keys(data).length === 0
  ) {
    return "Invalid dataset";
  } else {
    for (let user in data) {
      if (data[user].interests) {
        for (let i = 0; i < data[user].interests.length; i++) {
          if (data[user].interests[i].toLowerCase().includes("video games")) {
            result.push(user);
            break;
          }
        }
      }
    }
  }

  return result.length ? result : "No user found with video game interest";
}

//Q2 Find all users staying in Germany.

function allUserInGermany(data, country) {
  let ans = [];

  if (
    typeof data !== "object" ||
    data === null ||
    Object.keys(data).length === 0
  ) {
    return "Invalid dataset";
  } else {
    for (let i in data) {
      if (data[i] && data[i].nationality) {
        if (data[i].nationality.toLowerCase() === country.toLowerCase()) {
          ans.push(i);
        }
      }
    }
  }

  return ans.length ? ans : `No user found in ${country}`;
}

//Q3 Find all users with masters Degree.

function AllUsersWithMasterDegree(data, degree) {
  let ans = [];

  if (
    typeof data !== "object" ||
    data === null ||
    Object.keys(data).length === 0
  ) {
    return "Invalid dataset";
  } else {
    for (let i in data) {
      if (data[i] && data[i].nationality) {
        if (data[i].qualification.toLowerCase() === degree.toLowerCase()) {
          ans.push(i);
        }
      }
    }
  }

  return ans.length ? ans : `No user found in ${country}`;
}

//Q4 Group users based on their Programming language mentioned in their designation.

function getUserByGroupsOfLanguage(data) {
    if (
      typeof data !== "object" ||
      data === null ||
      Object.keys(data).length === 0
    ) {
      return "Invalid dataset";
    }
  
    const groupeofUsers = {
      C: [],
      Python: [],
      Java: [],
      Javascript: [],
      GoLang: [],
    };
  
    for (let i in data) {
      const userDesignation = data[i].desgination.toLowerCase();
  
      if (userDesignation.includes("golang")) {
        groupeofUsers.GoLang.push(i);
      } else if (userDesignation.includes("javascript")) {
        groupeofUsers.Javascript.push(i);
      } else if (userDesignation.includes("c")) {
        groupeofUsers.C.push(i);
      } else if (userDesignation.includes("python")) {
        groupeofUsers.Python.push(i);
      } else if (userDesignation.includes("java")) {
        groupeofUsers.Java.push(i);
      }
    }
  
    return groupeofUsers; 
  }
  

module.exports = {
  checkVideoGamePlayer,
  allUserInGermany,
  AllUsersWithMasterDegree,
  getUserByGroupsOfLanguage,
};


