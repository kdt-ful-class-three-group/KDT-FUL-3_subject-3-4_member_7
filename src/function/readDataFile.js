import fs from "fs";

function readDataFile() {
  const dataFile = fs.readFileSync("data.JSON");
  const data = dataFile.toString();
  return data;
}

export { readDataFile }