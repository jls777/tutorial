const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `here is the result : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with the task");
console.log("starting the next one");
