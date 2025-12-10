const someString = "This is some strange string";

function reverse(str) {
  let arr = someString.split(" ").reverse();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join(" ");
}
console.log(1, reverse(someString));

/* function reverse_old(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }

  let arr = str.split(` `);
  arr = arr.reverse();

  for (let i = 0; i < arr.length; i++) {
    let str1 = arr[i];
    let strReverse = ``;
    for (let j = str1.length - 1; j >= 0; j--) {
      strReverse = strReverse + str1[j];
    }
    arr[i] = strReverse;
  }

  str = arr.join(` `);

  return str;
}
console.log(2, reverse_old(someString)); */

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  if (arr.length === 0) {
    return "Нет доступных валют";
  }

  let str = "";
  for (let item of arr) {
    if (item !== missingCurr) {
      str = str + item + `\n`;
    }
  }

  if (str === "") {
    return "Нет доступных валют";
  } else {
    return "Доступные валюты:\n" + str;
  }
}
