let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean11(arr) {
  let myMap = new Map();
  for (value of arr) {
    let key = value.split("").sort().join("").toUpperCase();
    myMap.set(key, value);
  }

  let newArr = [];
  let mySet = new Set(myMap.keys());
  for (const key of mySet.values()) {
    let value = myMap.get(key);
    newArr.push(value);
  }
  return newArr;
}

console.log(aclean11(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

console.log(aclean(arr));

let map = new Map();

map.set("name", "John");

let keys = map.keys();

keys = Array.from(keys);
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);

let user = {
  name: "John",
  age: 30,
};

// перебор значений
for (let [key, value] of Object.entries(user)) {
  console.log(`${key} = ${value}`); // John, затем 30
}

function sumSalaries(salaries) {
  let sum = 0;
  for (let element of Object.values(salaries)) {
    sum += element;
  }
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));

let user11 = {
  name: 'John',
  age: 30
};

console.log( count(user11) ); // 2

function count(user11 ={}) {
  return Object.keys(user11).length;
}