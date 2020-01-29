use emissions;

db.dropDatabase()

db.emissionFactors.insertMany([
  {
  travel: {
      car: "473",
      train: "34.80",
      plane: "26900"
    },
  energy:{
      electricity: "700",
      gas: "500",
      hybrid: "600"
    },
  diet: {
      meat: "0.01378",
      veg: "0.005512"
    }
  }
])

db.userData.insertMany([

  {
    date: "2020-01-14",
    car: 4730,
    train: 348,
    plane: 269000,
    electricity: 7000,
    gas: 5000,
    hybrid: 6000,
    meat: 196900,
    veg: 50000,
    travelTotal: 274078,
    energyTotal: 18000,
    dietTotal: 246900,
    combinedTotal: 538978
},
{
  date: "2020-01-15",
  car: 1419,
  train: 104.39999999999999,
  plane: 80700,
  electricity: 2100,
  gas: 1500,
  hybrid: 1800,
  meat: 59070,
  veg: 15000,
  travelTotal: 82223.4,
  energyTotal: 5400,
  dietTotal: 74070,
  combinedTotal: 161693.4
}
]);
