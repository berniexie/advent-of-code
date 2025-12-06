const input = "516015-668918,222165343-222281089,711089-830332,513438518-513569318,4-14,4375067701-4375204460,1490-3407,19488-40334,29275041-29310580,4082818-4162127,12919832-13067769,296-660,6595561-6725149,47-126,5426-11501,136030-293489,170-291,100883-121518,333790-431800,897713-983844,22-41,42727-76056,439729-495565,43918886-44100815,725-1388,9898963615-9899009366,91866251-91958073,36242515-36310763"
// const input = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"

const checkIfNumberIsInvalid = (numberString: string, digit: number) => {
  if (numberString.length % digit === 0) {
    const numberToCheck = numberString.slice(0, digit);
    const permutationsToCheck = numberString.length / digit;

    let testString = ""
    for (let i = 0; i < permutationsToCheck; i++) {
      testString = testString.concat(numberToCheck);
    }

    return testString === numberString;
  }
  return false
}

const solve = () => {
  const ranges = input.split(",").map(range => range.split("-").map(Number));
  console.log(ranges)
  const invalidNums = new Set<number>();
  for (const range of ranges) {
    for (let i = range[0]; i <= range[1]; i++) {  
      const number = i.toString();
      const digis = number.length;
      for (let j = 1; j <= Math.floor(digis/2); j++) {
        if (checkIfNumberIsInvalid(number, j)) {
          invalidNums.add(i);
        }
      }
    }
  }
  console.log("invalidNums: ", invalidNums)
  return Array.from(invalidNums).reduce((acc, num) => acc + num, 0);
}


console.log(solve());
