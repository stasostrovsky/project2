/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();

console.log(calculateVolumeAndArea("5"));

function calculateVolumeAndArea(lengthsEdgeCube) {
  const x = Number(lengthsEdgeCube);

  if (!Number.isFinite(x) || x < 0 || x.toString().includes(".")) {
    return "ввели хрень!";
  }

  let str = `Объем куба: ${x * x * x}, площадь всей поверхности: ${6 * x * x}`;
  return str;
}

console.log(getCuopeNumber("10"));

function getCuopeNumber(place) {
  const x = Number(place);

  if (!Number.isFinite(x) || x < 0 || x.toString().includes(".")) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (x === 0 || x > 36) {
    return "Таких мест в вагоне не существует";
  }

  let minPlace = 1;
  let maxPlace = 4;

  for (let cuopeNumberindex = 1; cuopeNumberindex < 10; cuopeNumberindex++) {
    if (place >= minPlace && place <= maxPlace) {
      return cuopeNumberindex;
    }
    minPlace += 4;
    maxPlace += 4;
  }
}

console.log(getTimeFromMinutes(135));

function getTimeFromMinutes(fromMinutes) {
  let minutes = 0;
  let hour = 0;
  if (
    typeof fromMinutes != "number" ||
    !Number.isFinite(fromMinutes) ||
    fromMinutes <= 0
  ) {
    return "хрень ввели!";
  }

  hour = Math.floor(fromMinutes / 60);
  minutes = fromMinutes - hour * 60;

  let nameHour = "";

  if (hour === 1) {
    nameHour = "час";
  } else if (hour > 1 && hour < 5) {
    nameHour = "часа";
  } else {
    nameHour = "часов";
  }

  let str = `Это ${hour} ${nameHour} и ${minutes} минут`;

  return str;
}
//++++++++++++++++++++++++++++++++++++++
console.log(fib(8));

function fib(countIter) {
  let num = "";

  if (
    typeof countIter !== "number" ||
    countIter === 0 ||
    !Number.isInteger(countIter)
  ) {
    return num;
  }

  if (countIter === 1) {
    return "0";
  }

  let arr = [];
  for (let i = 0; i < countIter; i++) {
    if (i <= 1) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
  }

  for (let i = 0; i < countIter; i++) {
    num = num + arr[i] + ' ';
  }

  return num;
}

console.log((0.1 + 0.2).toFixed(2)==0.3);

