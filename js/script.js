// Место для первой задачи
function sayHello(userName) {
  userName = "Привет, " + userName + "!";
  //userName = `Привет ${userName} !`;

  return userName;
}
console.log(sayHello("stas"));

// Место для второй задачи
function returnNeighboringNumbers(myNumber) {
  let arr = [];
  --myNumber;
  for (let i = 0; i < 3; i++) {
    arr[i] = myNumber;
    myNumber++;
  }
  return arr;
}
console.log(returnNeighboringNumbers(10));

// Место для третьей задачи
function getMathResult(Baza, Povtorit) {
  if (String(typeof Povtorit) != "number" || Povtorit <= 0) {
    return Baza;
  }

  let res = "";

  for (let i = 1; i <= Povtorit; i++) {
    res = res + Baza * i + (i < Povtorit ? "---" : "");
  }

  return res;
}
console.log(getMathResult(10, 5));
