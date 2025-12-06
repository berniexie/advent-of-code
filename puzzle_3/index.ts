import { readInputLines } from "../fileReadUtils";

const lines = readInputLines(import.meta.url, false);

const findNextRemainingNum = (remainingLine: string, remainingDigits: number) => {
  let largestNum = 0;
  let index = -1;
  // console.log(remainingLine, remainingDigits)
  for (let i = 0; i <= remainingLine.length - remainingDigits; i++) {
    const currNum = parseInt(remainingLine[i]);
    // console.log("evaluting", currNum)
    if (currNum > largestNum) {
      largestNum = currNum;
      index = i;
    }
  }
  // console.log('returning, largestNum:', largestNum, 'index:', index)
  return { largestNum, index };
}

let finalCount = 0;
for (const line of lines) {
  // console.log(`Processing line: ${line}`);
  let finalNum = ''
  const totalDigits = 12;
  let currentLeftMostIndex = 0;
  for (let i = totalDigits; i > 0; i--) {
    const remainingLine = line.slice(currentLeftMostIndex);
    if (remainingLine.length === i) {
      finalNum = finalNum.concat(remainingLine)
      break;
    }
    const { largestNum, index } = findNextRemainingNum(remainingLine, i);
    finalNum = finalNum.concat(largestNum.toString());
    currentLeftMostIndex = currentLeftMostIndex + 1 + index;
  }
  // console.log(finalNum)
  finalCount += parseInt(finalNum)
}

console.log(finalCount)