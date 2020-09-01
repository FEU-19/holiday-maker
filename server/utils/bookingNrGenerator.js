function randomLetter(n) {
  const arr = [];
  for (let i = 0; i < 25; i += 1) {
    arr[i] = i + 97;
  }
  let string = "";

  for (let i = 0; i < n; i += 1) {
    string += String.fromCharCode(arr[Math.ceil(Math.random() * arr.length)]);
  }
  return string;
}

function shuffle(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr.join("");
}

function bookingNrGenerator(name, lastname, postnumber, lengthOfParts) {
  let str = "";
  let part1 = name.slice(0, lengthOfParts);
  if (part1.lengthOfParts < lengthOfParts) {
    part1 += randomLetter(lengthOfParts - part1.lengthOfParts);
  }
  let part2 = lastname.slice(0, lengthOfParts);
  if (part2.lengthOfParts < lengthOfParts) {
    part2 += randomLetter(lengthOfParts - part2.lengthOfParts);
  }
  const part3 = postnumber.toString().slice(0, lengthOfParts);

  str += part1 + part2 + part3;

  return shuffle(str.split(""));
}

module.exports = bookingNrGenerator;
