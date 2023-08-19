const judgeVegetable = (veggies, characteristic) => {
  let bestScore = 0;
  let winner = "";

  for (let i = 0; i < veggies.length; i++){
    if (veggies[i][characteristic] > bestScore){
      bestScore = veggies[i][characteristic];
      winner = veggies[i].submitter;
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));