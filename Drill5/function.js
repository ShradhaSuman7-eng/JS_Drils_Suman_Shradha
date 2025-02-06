const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys

function keys(obj) {
  let ObjectKeys = [];
  for (let key in obj) {
    if (obj[key] !== undefined || key in obj) {
      ObjectKeys.push(key);
    }
  }
  return ObjectKeys;
}

// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values

function values(obj) {
  const result = [];
  for (let key in obj) {
    if (key in obj && typeof obj[key] !== "function") {
      result.push(obj[key]);
    }
  }
  return result;
}

// Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
// http://underscorejs.org/#mapObject

function mapObject(obj, cb) {
  const result = {};
  for (let key in obj) {
    result[key] = cb(obj[key]);
  }

  return result;
}

  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
function pairs(obj) {
  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}


  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert



  
function invert(obj) {
  const result = {};

  for (let key in obj) {
    result[String(obj[key])] = key;
  }

  return result;
}


// Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  function defaults(obj, defaultProps) {
    for (let key in defaultProps) {
      if (!(key in obj) || obj[key] === undefined) {
        obj[key] = defaultProps[key];
      }
    }
    return obj; 
  }



module.exports = { keys, values, mapObject, pairs,invert,defaults};
