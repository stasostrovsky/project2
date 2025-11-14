const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (personalPlanPeter) {
    let age = personalPlanPeter.age;
    let languages = personalPlanPeter.skills.languages;
    let languagesStr = languages.join(" ").toUpperCase();
    return `Мне ${age} и я владею языками: ${languagesStr}`;
  },
};

//'Мне 29 и я владею языками: RU ENG'
personalPlanPeter["showAgeAndLangs"] = function (plan = personalPlanPeter) {
  let msg = `Мне ${plan.age} и я владею языками: ${plan.skills.languages
    .join(" ")
    .toUpperCase()}`;

  return msg;
};

function showExperience(plan) {
  return plan.skills.exp;
}

//"Язык js изучен на 20% Язык php изучен на 10%";
function showProgrammingLangs(plan = personalPlanPeter) {
  let mes = "";
  let programmingLangs = plan.skills.programmingLangs;

  for (let [Lang, proc] of Object.entries(programmingLangs)) {
    mes += `Язык ${Lang} изучен на ${proc}.\n`;
  }

  return mes;
}

function showProgrammingLangs1(plan) {
  let programmingLangs = plan.skills.programmingLangs;
  let msg = ``;
  for (let key in programmingLangs) {
    msg = msg + `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  //msg = msg.slice(0, msg.length - 1);
  return msg; //
}

//console.log(showProgrammingLangs(personalPlanPeter));

//console.log(showExperience(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
