const palindromes = function (text) {
  const words = text.split("");
  return revWords(words) === stripWords(words);
};

const revWords = (words) =>
  words
    .map((word) => loopRev(word))
    .reverse()
    .join("");

const stripWords = (words) => words.map((word) => strip(word)).join("");

const loopRev = (word) => {
  let res = "";
  word.split("").forEach((ch) => {
    if (/[a-zA-Z]/.test(ch)) {
      res += ch.toLowerCase();
    }
  });
  return res;
};

const strip = (word) => {
  const res = [];
  word.split("").forEach((ch) => {
    if (/[a-zA-Z]/.test(ch)) {
      res.push(ch.toLowerCase());
    }
  });
  return res.join("");
};

// Do not edit below this line
module.exports = palindromes;
