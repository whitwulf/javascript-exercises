const removeFromArray = function(arr, ...toRemove) {
  if (!toRemove) {
    return arr
  }
  return arr.filter((el) => !toRemove.includes(el))
};

// Do not edit below this line
console.log(removeFromArray([1,2,4], 3))
module.exports = removeFromArray;
