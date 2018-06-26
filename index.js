fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (const item in collection) {
         iteratee(collection[item])
      }
      return collection
    },

    map: function(collection, iteratee) {
      const array = []
      for (const item in collection) {
         array.push(iteratee(collection[item]))
      }
      return array
    },

    reduce: function(collection, iteratee, acc) {
      if (acc === undefined) {
        acc = 0
      }
      for (let i = 0; i < collection.length; i++) {
        const newAcc = iteratee(acc, collection[i], collection)
        acc = newAcc
      }
      return acc
    },

    find: function(collection, predicate) {
        for (const item in collection) {
           if (predicate(collection[item]) === true) {
              return collection[item]
           }
        }
    },

    filter: function(collection, predicate) {
      const array = []
      for (const item in collection) {
         if (predicate(collection[item]) === true) {
            array.push(collection[item])
         }
      }
      return array
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(array, n) {
      if (n === undefined) {
        return array[0]
      } else {
        return array.slice(0, n)
      }

    },

    last: function(array, n) {
      if (n === undefined) {
        return array[array.length-1]
      } else {
        return array.slice(array.length-n)
      }
    },

    compact: function(array) {
      let newArr = [];
      for (let i = 0; i <array.length; i++) {
        if (array[i]) {
          newArr.push(array[i]);
        }
      }
      return newArr;
    },

    sortBy: function(array, iteratee) {
      console.log(array)
      console.log(iteratee)
    array.sort(function(a, b){return a-b});
    },
  }
})()

fi.libraryMethod()
