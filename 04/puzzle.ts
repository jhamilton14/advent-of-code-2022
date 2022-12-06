export const part1 = (input: string) => {
  const lines = input.split("\n").map(line => line.split(","));
  let numberOfIntersections = 0;
  lines.forEach(line => {
    const firstElf = line[0].split("-");
    const firstElfAssignments = Array.from(
      { length: parseInt(firstElf[1], 10) - parseInt(firstElf[0], 10) + 1 },
      (_, i) => `:${(parseInt(firstElf[0], 10) + i).toString()}:`
    ).toString();
    
    const secondElf = line[1].split("-");
    const secondElfAssignments = Array.from(
      { length: parseInt(secondElf[1], 10) - parseInt(secondElf[0], 10) + 1 },
      (_, i) => `:${(parseInt(secondElf[0], 10) + i).toString()}:`
    ).toString();

    if(firstElfAssignments.indexOf(secondElfAssignments) !== -1 || secondElfAssignments.indexOf(firstElfAssignments) !== -1) {
      numberOfIntersections++;
    }
  })

  return numberOfIntersections;
};

export const part2 = (input: string) => {
  const lines = input.split("\n").map(line => line.split("-"));

  // start coding here

  "234"
  "678"

  return lines.length;
};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();