/* const array = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let index = 0; index < array.length; index++) {
  result[result.length] = array[index];
}
console.log(result); */

/* const array = [10, 20, "Shopping", 40, "Homework"];

for (let index = 0; index < array.length; index++) {
  let element = array[index];
  if (typeof element === "string") {
    element += " - done";
    array[index] = element;
  } else {
    array[index] *= 2;
  }
}

console.log(array);

let result = [];

for (let index = array.length - 1; index >= 0; index--) {
  result[result.length] = array[index];
}
console.log(result); */

const lines = 5;
let result = "";
for (let i = 0; i < lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
