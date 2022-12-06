import { lodash } from "/deps.ts";

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const part1 = (input: string) => {
  const lines = input.split("\n").map(line => {
    const lineHalves = [line.slice(0, line.length / 2), line.slice(line.length / 2, line.length)];
    return lineHalves;
  });

  const dupes = lines.flatMap(line => {
    let dupeLetters: string[] = [];
    line[0].split("").forEach(letter => {
      if(line[1].includes(letter) && !dupeLetters.includes(letter)) {
        dupeLetters.push(letter);
      }
    });
    return dupeLetters;
  });

  return dupes.reduce((total, current) => total + alphabet.indexOf(current) + 1 , 0);
};

export const part2 = (input: string) => {
  return lodash.chunk(input.split("\n"), 3).map(line => line.map(l => l.split(""))).reduce((total, current) => total + alphabet.indexOf(lodash.intersection(...current)) + 1 , 0);
};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();