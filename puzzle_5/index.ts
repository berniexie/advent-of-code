import { readInputLines } from "../fileReadUtils";

const lines = readInputLines(import.meta.url, false)

const isFresh = (num: number) => {
  for (let j=0; j < rangeArray.length; j++) {
    if (num >= rangeArray[j][0] && num <= rangeArray[j][1]) {
      return true;
    }
    if (num < rangeArray[j][0]) {
      return false

    }
  }
  return false
}


const mergeArray = (arr: [number, number][]): [number, number][] => {
  const merged: [number, number][] = [arr[0]];
  console.log('merging', arr)

  for (let i = 1; i < arr.length; i++) {
    const currentStart = arr[i][0];
    const currentEnd = arr[i][1];

    let toAdd = true;
    for (let j = 0; j < merged.length; j++) {
      if (currentStart <= merged[j][1] && currentStart >= merged[j][0]) {
        toAdd = false
        if (currentEnd >= merged[j][1]) { 
          console.log("merging", [currentStart, currentEnd], "with", merged[j])
          merged[j][1] = currentEnd;
        }
        continue
      }
    }

    if (toAdd) {
      merged.push([currentStart, currentEnd]);
    }
  }

  return merged;
}

let rangeArray: [number, number][] = []
let isCheckStart = false;
let freshCount = 0;
for (let i=0; i < lines.length; i++) {
  if (lines[i].trim() === '') {
    isCheckStart = true;
    rangeArray.sort((a, b) => a[0] - b[0]);

    rangeArray = mergeArray(rangeArray);
    console.log("merged ranges:", rangeArray)
    continue;
  }
  // console.log(lines[i])
  if (!isCheckStart) {
    const range = lines[i].split("-");
    rangeArray.push([parseInt(range[0]), parseInt(range[1])]);
  }

  if (isCheckStart) {
    for (const range of rangeArray) {
      freshCount += range[1] - range[0] + 1;
    }
    break;
  }
}

console.log(freshCount)