// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

function counterFactory() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
}

// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// Returning null is acceptable if cb can't be returned
function limitFunctionCallCount(cb, n) {
  let count = 0;
  return function () {
    if (count < n) {
      count++;
      return cb();
    } else {
      return null; // Return null instead of a message
    }
  };
}

// Should return a function that invokes `cb`.
// A cache (object) should be kept in closure scope.
// The cache should keep track of all arguments have been used to invoke this function.
// If the returned function is invoked with arguments that it has already seen
// then it should return the cached result and not invoke `cb` again.
// `cb` should only ever be invoked once for a given set of arguments.

function cacheFunction(cb) {
  const cache = {};
  return function (...args) {
    const key = args.toString();

    if (!(key in cache)) {
      cache[key] = cb(...args);
    }

    return cache[key];
  };
}




module.exports = {
  counterFactory,
  limitFunctionCallCount,
  cacheFunction
  
};
