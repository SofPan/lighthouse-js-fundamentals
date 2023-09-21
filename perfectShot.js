const finalPosition = function (moves) {
  let posX = 0;
  let posY = 0;

  for (const move of moves){
    if (move === "north"){
      posX++;
    }
    if (move === "south"){
      posX--;
    }
    if (move === "east"){
      posY++;
    }
    if (move === "west"){
      posY--;
    }
  }
  return [posY, posX];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);
