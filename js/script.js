let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = Math.random();
    this.b = Math.random();
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());
