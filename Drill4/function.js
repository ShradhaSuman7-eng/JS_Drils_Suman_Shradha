function forEach(elements, cb) {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each

  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
   }
 }



  // Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  function ForMap(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(cb(arr[i], i));
    }
    return result;
  }
  

 // Do NOT use .reduce to complete this function.
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

  function reduceMethod(elements, cb, startingValue) {
    let accumulator = startingValue !== undefined ? startingValue : elements[0];
    let i = startingValue !== undefined ? 0 : 1; 
  
    while (i < elements.length) {
      accumulator = cb(accumulator, elements[i], i);
      i++;
    }
    return accumulator;
  }





    // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  
  function Find(elements, cb) {
    for (let i = 0; i < elements.length; i++) {
      if (cb(elements[i], i)) return elements[i]; 
    }
    return undefined; 
  }








  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

  function Filter(elements, cb) {
    let result = [];
  
    for (let i = 0; i < elements.length; i++) {
      if (cb(elements[i], i)) {
        result.push(elements[i]); 
      }
    }
  
    return result; 
  }




// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

function flatten(elements) {
  let ar = [];

  if (Array.isArray(elements)) {
    elements.forEach(element => {
      ar.push(...flatten(element)); 
    });
  } else {
    ar.push(elements); 
  }

  return ar; 
}

  



module.exports = {
  forEach,
  ForMap,
  reduceMethod,
  Find,
  Filter,
  flatten
};
