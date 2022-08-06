const getAge = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear(); // return current year using Date()
  }
  return death - birth;
};

const findTheOldest = (people) => {
  return people.reduce((acc, cv) =>
    getAge(acc.yearOfBirth, acc.yearOfDeath) <
    getAge(cv.yearOfBirth, cv.yearOfDeath)
      ? cv
      : acc
  );
};

// Do not edit below this line
module.exports = findTheOldest;
