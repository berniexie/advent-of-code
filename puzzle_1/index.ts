import { readInputLines } from "../fileReadUtils";

const lines = readInputLines(import.meta.url);

const countTimesItCrossed0 = () => {
  let pos = 50;
  let count = 0;
  for (const line of lines) {
    const direction = line[0];
    const steps = parseInt(line.slice(1));
    // console.log(direction, steps%100);
  
    console.log("[BEFORE MOVE] position: ", pos, "count: ", count)
    console.log("[NEW MOVE]", line)
    const startingPos = pos;
    const timesFullCircle = (steps - steps % 100)/100;
    if (timesFullCircle > 0) {
      console.log("timesFullCircle: ", timesFullCircle)
    }
    count += timesFullCircle

    if (direction === "L") {
      pos -= steps%100;
    } else {
      pos += steps%100;
    }

    if (pos > 99) {
      pos -= 100
      if (pos !== 0) {
        count++;
      }
    } else if (pos < 0) {
      pos += 100
      if (startingPos !== 0) {
        count++;
      }
    }
    console.log("[AFTER MOVE] position: ", pos, "count: ", count)
    console.log("--------------------------------")
  }
  return count
}

const countTimesItHit0 = () => {
  let zeroCount = 0
  let zeroPos = 50;
  for (const line of lines) {
    const direction = line[0];
    const steps = parseInt(line.slice(1));
  
    if (direction === "L") {
      zeroPos -= steps%100;
    } else {
      zeroPos += steps%100;
    }
  
    if (zeroPos > 99) {
      zeroPos -= 100
    }
    if (zeroPos < 0) {
      zeroPos += 100
    }
    if (zeroPos === 0) {
      zeroCount++;
    }
  }
  return zeroCount
}

const x = countTimesItCrossed0()
const y = countTimesItHit0()
console.log("1", x)
console.log("2", y)
console.log("3", x + y)
