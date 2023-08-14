const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const chooseStations = function (station){
  const goodStations = [];
  for (const sta of station){
    if (sta[1] >= 20 && (sta[2] === "school" || sta[2] === "community centre")){
      goodStations.push(sta[0]);
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));