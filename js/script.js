function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  counter.getCount = function () {
    return counter.count;
  };

  return counter;
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter.getCount());

let counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter2()); // 1
console.log(counter2()); // 1
console.log(counter2()); // 1
console.log("counter2:", counter2.getCount());
console.log("counter:", counter.getCount());
