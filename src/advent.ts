import Puzzles from "./puzzles";
import Data from "./data";

const day01_1 = Puzzles.day01_1(Data.day01);
const day01_2 = Puzzles.day01_2(Data.day01);
console.log("Day 1 - Puzzle 1:", day01_1);
console.log("Day 1 - Puzzle 2:", day01_2);

const day02 = Puzzles.day02(Data.day02);
console.log("Day 2 - Puzzle 1:", day02.valid_1);
console.log("Day 2 - Puzzle 2:", day02.valid_2);
// console.log("Day 2 - Passwords:", day02.passwords);

const day03 = Puzzles.day03(Data.day03);
console.log("Day 3 - Puzzle 1:", day03.puzzle1);
console.log("Day 3 - Puzzle 2:", day03.puzzle2);
// console.log("Day 3 - Impacts:", day03.impacts);
