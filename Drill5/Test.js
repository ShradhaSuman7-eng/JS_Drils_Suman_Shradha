const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions


const {keys,values,mapObject,pairs,invert,defaults}= require("./function.js");

// ------------------------------------------testing of keys
console.log(keys(testObject));

// ---------------------------------teting value of keys
console.log(values(testObject))


//--------------------------------------------------testing map
function returnValueInUpperCase(data){
  if(typeof data =="string"){
    return data.toUpperCase();
  }
  return data;
}
console.log(mapObject(testObject,returnValueInUpperCase))



//testing pairs
console.log(pairs(testObject));



// -----------------------testing invert
console.log(invert(testObject));


//------------------------testing default
const user = {
  name: "Shradha",
  age: undefined 
};

const defaultsObj = {
  age: 22,
  city: "Supaul",
  isStudent: true
};

console.log(defaults(user,defaultsObj));



