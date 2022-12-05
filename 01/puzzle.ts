export const part1 = (input: string) => {
  const lines = input.split("\n\n").map(line => line.split("\n"));

  return Math.max(...lines.map(line => {
    return line.reduce((total, current) => total + parseInt(current), 0);
  }));
};

export const part2 = (input: string) => {
  const lines = input.split("\n\n").map(line => line.split("\n"));

  // start coding here
  return lines.map(line => {
    return line.reduce((total, current) => total + parseInt(current), 0);
  }).sort((a, b) => b - a).splice(0,3).reduce((total, current) => total + current, 0);
};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();
