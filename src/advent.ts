import Puzzles from "./puzzles";
import Data from "./data";

const lb = () => {
  console.log('\n');
}

console.group("Day 1");
const day01_1 = Puzzles.day01_1(Data.day01);
const day01_2 = Puzzles.day01_2(Data.day01);
console.log("Puzzle 1:", day01_1);
console.log("Puzzle 2:", day01_2);
console.groupEnd(); lb();

console.group("Day 2");
const day02 = Puzzles.day02(Data.day02);
console.log("Puzzle 1:", day02.valid_1);
console.log("Puzzle 2:", day02.valid_2);
// console.log("Passwords:", day02.passwords);
console.groupEnd(); lb();

console.group("Day 3");
const day03 = Puzzles.day03(Data.day03);
console.log("Puzzle 1:", day03.puzzle1);
console.log("Puzzle 2:", day03.puzzle2);
// console.log("Day 3 - Impacts:", day03.impacts);
console.groupEnd(); lb();

console.group("Day 4");
const day04 = Puzzles.day04(Data.day04);
console.log("Day 4 - Puzzle 1:", day04.haveRequired);
console.log("Day 4 - Puzzle 2:", day04.validated);
console.groupEnd(); lb();

console.group("Day 5");
const day05 = Puzzles.day05(Data.day05);
console.log("Day 5 - Puzzle 1:", day05.highestSeatID);
console.log("Day 5 - Puzzle 2:", day05.missingSeatID);
console.groupEnd(); lb();

console.group("Day 6");
const day06 = Puzzles.day06(Data.day06);
console.log("Day 6 - Puzzle 1:", day06.yesSum);
console.log("Day 6 - Puzzle 2:", day06.groupYesSum);
console.groupEnd(); lb();