const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

console.log(sortStudentsByGroups(students));

function sortStudentsByGroups(arr = []) {
  arr.sort((a, b) => a.localeCompare(b));

  console.log(`До: $(arr)`);

  let remainder = arr.length % 9;

  let arrRemainingStudents = arr.splice(arr.length - remainder, remainder);

  console.log(`После: $(arr)`);

  let countRow = arr.length / 3;

  let arrResult = [];
  let start = 0;
  let end = 3;
  for (let i = 0; i < countRow; i++) {
    let a1 = arr.slice(start, end);
    console.log(a1);

    arrResult[i] = a1;

    start = end;
    end = end + 3;
  }

  let msg = "";

  if (remainder === 0) {
    msg = "Оставшиеся студенты: -";
  } else {
    msg = "Оставшиеся студенты: " + arrRemainingStudents.join(", ");
  }

  arrResult[arrResult.length] = msg;

  return arrResult;
}
