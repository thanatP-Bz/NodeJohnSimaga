const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
console.log(first);

writeFileSync("./content/result.txt", `the result is : ${first}`, {
  flag: "a",
});
