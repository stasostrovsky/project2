const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

console.log(isBudgetEnough(shoppingMallData));

function isBudgetEnough(data) {
  let AreaAllStores = CalcTotalAreaAllStores(data.shops);
  let TotalVolumeShoppingCenter = CalcTotalVolumeShoppingCenter(
    AreaAllStores,
    data.height
  );
  let budget = СalcBudget(TotalVolumeShoppingCenter, data.moneyPer1m3);

  let str = "";
  if (budget <= data.budget) {
    str = "Бюджета достаточно";
  } else {
    str = "Бюджета недостаточно";
  }
  return str;
}

//вычисление общей площади всех магазинов,
//которая вычисляется как длина магазина умноженная на его ширину
function CalcTotalAreaAllStores(shops) {
  let AreaAllStores = 0;

  for (let i = 0; i < shops.length; i++) {
    AreaAllStores += shops[i].width * shops[i].length;
  }

  return AreaAllStores;
}

//Вычисление общего объема торгового центра,
//так как цена отопления указана в кубических метрах;
function CalcTotalVolumeShoppingCenter(AreaAllStores, height) {
  return AreaAllStores * height;
}

//Рассчитать бюджет
function СalcBudget(TotalVolumeShoppingCenter, moneyPer1m3) {
  return TotalVolumeShoppingCenter * moneyPer1m3;
}
