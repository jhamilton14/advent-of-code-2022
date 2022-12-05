const letterToScore = {
  "A": 1,
  "X": 1,
  "B": 2,
  "Y": 2,
  "C": 3,
  "Z": 3
}

const scoreOnWin = (enemyMove: string) => {
  let myScore = 6;

  if(enemyMove === "A") {
    myScore += letterToScore["Y"];
  } else if(enemyMove === "B") {
    myScore += letterToScore["Z"];
  } else {
    myScore += letterToScore["X"]
  }

  return myScore;
}

const scoreOnLoss = (enemyMove: string) => {
  let myScore = 0;

  if(enemyMove === "A") {
    myScore += letterToScore["Z"];
  } else if(enemyMove === "B") {
    myScore += letterToScore["X"];
  } else {
    myScore += letterToScore["Y"];
  }

  return myScore;
}

const scoreOnDraw = (enemyMove: string) => {
  return letterToScore[enemyMove] + 3;
}

const calculateScore = (moves: string[]) => {
  const enemyMove = moves[0];
  const myMove = moves[1];

  const myWinningScore = letterToScore[myMove] + 6;

  if(letterToScore[enemyMove] === letterToScore[myMove]) {
    return letterToScore[myMove] + 3;
  }

  if(enemyMove === "A") {
    if(myMove === "Y") {
      return myWinningScore;
    }
  } else if(enemyMove === "B") {
    if(myMove === "Z") {
      return myWinningScore;
    }
  } else if(enemyMove === "C") {
    if(myMove === "X") {
      return myWinningScore;
    }
  }
  return letterToScore[myMove];
}

export const part1 = (input: string) => {
  const lines = input.split("\n").map(line => line.split(" "));
  const total = lines.reduce((total, current) => total + calculateScore(current), 0);
  return total;
};

export const part2 = (input: string) => {
  const lines = input.split("\n").map(line => line.split(" "));
  const total = lines.reduce((total, current) => {
    const enemyMove = current[0];
    const result = current[1];

    if(result === "X") {
      return total + scoreOnLoss(enemyMove);
    }

    if(result === "Y") {
      return total + scoreOnDraw(enemyMove);
    }

    return total + scoreOnWin(enemyMove);
  }, 0)
  return total;
};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();