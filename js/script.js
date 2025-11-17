function Calculator() {
  this.a = 0;
  this.b = 0;
  this.read = function () {
    this.a = Math.random(); //+prompt("Введите число a", "0");
    this.b = Math.random(); //+prompt("Введите число b", "0");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
  return this;
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());
