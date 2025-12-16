import { readInputLines } from "../fileReadUtils";

const lines = readInputLines(import.meta.url, false);

const isExtractableRoll = (index: number, currentLine: string[], prevLine: string[], nextLine: string[]) => {
  // check prev line
  if (currentLine[index] !== "@") {
    return false
  }

  let numRolls = 0;
  // prev
  if (index > 0) {
    if (prevLine?.[index - 1] === "@") {
      numRolls += 1;
    }
    if (nextLine?.[index - 1] === "@") {
      numRolls += 1;
    }
    if (currentLine[index - 1] === "@") {
      numRolls += 1;
    }
  }

  if (prevLine?.[index] === "@") {
    numRolls += 1;
  }
  if (nextLine?.[index] === "@") {
    numRolls += 1;
  }


  // after
  if (prevLine?.[index + 1] === "@") {
    numRolls += 1;
  }
  if (nextLine?.[index + 1] === "@") {
    numRolls += 1;
  }
  if (currentLine[index + 1] === "@") {
    numRolls += 1;
  }

  // console.log(`i: ${i}, j: ${j}, numRolls: ${numRolls}`)
  if (numRolls < 4) {
    return true;
  }
  return false;
}


let prevLine: string[] = [];
let currentLine: string[] = [];
let nextLine: string[] = [];
let count = 0;
let prevCount = 0;
while (prevCount !== count || (prevCount === 0 && count === 0)) {
  prevCount = count;
  for (let i=0; i < lines.length; i++) {
    if (i > 0) {
      prevLine = currentLine
    }
    currentLine = lines[i].split('');
    if (i < lines.length - 1) {
      nextLine = lines[i + 1].split('');
    } else {
      nextLine = [];
    }

    for (let j=0; j < currentLine.length; j++) {
      if (isExtractableRoll(j, currentLine, prevLine, nextLine)) {
        count += 1;
        lines[i] = lines[i].substring(0, j) + "." + lines[i].substring(j + 1);
      }
    }
  }
}

console.log(count)