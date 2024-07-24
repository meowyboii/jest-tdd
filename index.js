const isLetter = (str) => {
  return str.length === 1 && str.match(/[a-z]/i);
};

const capitalize = (word) => {
  const noCapital = word.toLowerCase();
  const capitalizedWord =
    noCapital.charAt(0).toUpperCase() + noCapital.slice(1);
  return capitalizedWord;
};
const reverseString = (word) => {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word.charAt(i);
  }
  return reversedWord;
};

const calculator = (function () {
  const add = (num1, num2) => {
    return num1 + num2;
  };
  const subtract = (num1, num2) => {
    return num1 - num2;
  };
  const divide = (num1, num2) => {
    return num1 / num2;
  };
  const multiply = (num1, num2) => {
    return num1 * num2;
  };
  return { add, subtract, divide, multiply };
})();

const caesarCipher = (word, shift) => {
  let cipher = "";
  for (let i = 0; i < word.length; i++) {
    if (isLetter(word[i])) {
      // e.g. a = 1, b = 2, etc.
      const alphabetPosition = word.charCodeAt(i) - 96;
      let shiftedPosition = alphabetPosition + shift;
      if (shiftedPosition > 26) {
        shiftedPosition %= 26;
      }
      const shiftedLetter = String.fromCharCode(shiftedPosition + 96);
      cipher += shiftedLetter;
    } else {
      cipher += word[i];
    }
  }
  return cipher;
};

const analyzeArray = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return { average, min, max, length };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
