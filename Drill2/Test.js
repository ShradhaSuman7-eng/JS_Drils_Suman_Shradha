const {checkVideoGamePlayer,allUserInGermany,AllUsersWithMasterDegree,getUserByGroupsOfLanguage}=require('./functions.js')
const dataset=require('./Data.js')

// Q1 Find all users who are interested in playing video games.
console.log(checkVideoGamePlayer(dataset));


// Q2 Find all users staying in Germany.
console.log(allUserInGermany(dataset, "Germany"));



// Q3 Find all users with masters Degree.
console.log(AllUsersWithMasterDegree(dataset,"Masters"));


// Q4 Group users based on their Programming language mentioned in their designation.
console.log(getUserByGroupsOfLanguage(dataset));