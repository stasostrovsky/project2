const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr = [], missingCurr) {
  if (arr == 0) {
    return "Нет доступных валют";
  }
  let myArr = arr.filter((value) => value !== missingCurr);
  return myArr.join("\n");
}

let arr = [...baseCurrencies, ...additionalCurrencies];
console.log(arr);

console.log(availableCurr(arr, "CNY"));
