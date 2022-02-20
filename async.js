const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    //write file do not need to put in the variable
    await writeFile("./content/second.txt", "This is the second text"); //We can apprend by flag: ("a")
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};

start();
