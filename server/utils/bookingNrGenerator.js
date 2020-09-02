function randomLetter(n) {
  let string = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < n; i += 1) {
    string += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return string;
}

function randomNumberToString(n) {
  let randomN = "";
  for (let i = 0; i < n; i += 1) {
    randomN += Math.floor(Math.random() * 10).toString();
  }
  return randomN;
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
  if (part1.length < lengthOfParts) {
    part1 += randomLetter(lengthOfParts - part1.length);
  }

  let part2 = lastname.slice(0, lengthOfParts);
  if (part2.length < lengthOfParts) {
    part2 += randomLetter(lengthOfParts - part2.length);
  }

  let part3 = postnumber.toString().slice(0, lengthOfParts);
  if (part3.length < lengthOfParts) {
    part3 += randomNumberToString(lengthOfParts - part3.length);
  }

  str += part1 + part2 + part3;
  return shuffle(str.split(""));
}

module.exports = bookingNrGenerator;
