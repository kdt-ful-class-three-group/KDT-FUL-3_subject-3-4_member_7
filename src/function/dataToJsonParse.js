import { readDataFile } from "./readDataFile.js"

function dataToJsonParse() {
  const dataFile = readDataFile();
  const dataJsonObj = JSON.parse(dataFile);
  console.log(dataJsonObj);
}

export { dataToJsonParse }