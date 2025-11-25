let num = 35; //+prompt("Введите положительное целое число?", 35);
let diff, result;
let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log(result || "возникла ошибка");

console.log(`Выполнение заняло ${diff}ms`);

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Должно быть целое неотрицательное число");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
