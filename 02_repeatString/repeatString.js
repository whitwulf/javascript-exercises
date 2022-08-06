const repeatString = function(str, num) {
  res = ''
  if (num < 0) {
    return 'ERROR'
  } else if (num <= 1) {
    return str
  }
  for (let i = 0; i < num; i++) {
    res += str
  }
  return res
}


// Do not edit below this line
module.exports = repeatString;
