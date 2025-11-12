let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(obj) {
  max_zp = Number.NEGATIVE_INFINITY;
  let name = null;
  for (let [key, value] of Object.entries(obj)) {
    if (value > max_zp) {
      name = key;
      max_zp = value;
    }
  }
  return name;
}

console.log(topSalary(salaries));
