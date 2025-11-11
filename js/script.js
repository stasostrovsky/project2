while (true) {
  let num = prompt("Введите числою", "");

  if (num.trim() === "" || num === null) {
    return null;
  }

  if (isFinite(num)) {
    return +num;
  }
}

function random(min, max) {
  let num = min + Math.random() * (max - min);
  return num;
}

console.log(random(2, 5));

function random2(min, max) {
  let num = min + Math.random() * (max + 1 - min);
  return Math.floor(num);
}

console.log(random2(2, 5));

function ucFirst(str = "") {
  if (typeof str !== "string" || str.trim() == "") {
    return "-";
  }
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(47));

function checkSpam(str = "") {
  let arr = ["viagra", "xxx"];

  for (let index = 0; index < arr.length; index++) {
    if (str.toLowerCase().includes(arr[index])) {
      return true;
    }
  }
  return false;
}

console.log(checkSpam("buyconso asdasdas now"));

function truncate(str = "", num) {
  if (str.trim().length <= num) {
    return str;
  }
  return str.trim().slice(0, num - 1) + "...";
}

//"Вот, что мне хотело…"
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

//= "Всем привет!"
console.log(truncate("Всем привет!", 20));

function extractCurrencyValue(params = "") {
  return +params.slice(1);
}
console.log(extractCurrencyValue("$120"));

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
  alert(pow(x, n));
}

console.log((0.1 + 0.2).toFixed(2) == 0.3);

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  console.log(`${key}: `, user[key]);
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

function isEmpty(schedule) {
  /* let isEmp = true;
  for (const key in schedule) {
    isEmp = false;
    break;
  }
  return isEmp; */

  return Boolean(Object.keys(schedule).length);
}

let salaries = {
  John: 'a100',
  Ann: 160,
  Pete: 130,
};

function sum(obj) {
  let itog = 0;

  for (const key in obj) {
    if (Object.hasOwn(obj, key) && Number.isFinite(obj[key])) {
      itog += obj[key];
    }
  }

  return itog;
}

console.log(sum(salaries));