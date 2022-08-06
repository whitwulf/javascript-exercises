const ftoc = function(fahr) {
  return (fahr - 32) * 5 / 9
};

const ctof = function(cel) {
  return cel * 1.8 + 32
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
