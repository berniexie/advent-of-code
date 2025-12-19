import { readInputLines } from "../fileReadUtils";

const lines = readInputLines(import.meta.url, false);

const arrays: string[][] = [];
for (let i = 0; i < lines.length; i++) {
  const parts = lines[i].split("");
  arrays.push(parts);
}

// console.log(arrays);
const finalRow = arrays.length - 1;
const numColumns = arrays[0].length;
const numRows = arrays.length;

const doCalculation = (nums: number[], op: string) => {
  console.log("calculation nums", nums, op);
  let total: number = nums[0];
  for (let row = 1; row < nums.length; row++) {
    if (op === "*") {
      total *= nums[row];
    } else if (op === "+") {
      total += nums[row];
    }
  }
  return total;
};

let totalTotal = 0;
// its always arrays[row][col]
let numCandidate = "";
let nums: number[] = [];
let op = "";
for (let col = 0; col < numColumns; col++) {
  for (let row = 0; row < numRows - 1; row++) {
    // means new op
    if (arrays[finalRow][col] !== " " && !!arrays[finalRow][col]) {
      console.log("FOUND SYMBOL", col, arrays[finalRow][col]);
      op = arrays[finalRow][col];
    }

    // compile possible numbers
    const char = arrays[row][col];
    if (char !== " ") {
      numCandidate = numCandidate.concat(arrays[row][col]);
    }
  }
  console.log("candidate", numCandidate);
  if (numCandidate === "") {
    totalTotal += doCalculation(nums, op);
    nums = [];
    op = "";
    continue;
  }
  if (numCandidate != "") {
    nums.push(parseInt(numCandidate));
    numCandidate = "";
  }
}
totalTotal += doCalculation(nums, op);

// const op = arrays[finalRow][col];
// totalTotal += doCalculation(nums, op);

console.log(totalTotal);
