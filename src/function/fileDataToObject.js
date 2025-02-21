import { readDataFile } from "./readDataFile.js";
import { dataToJsonParse } from "./dataToJsonParse.js";

function fileDataToObject() {
  const arrayObj = [];
  const dataJson = readDataFile();
  const dataObj = dataToJsonParse(dataJson);
  dataObj.forEach(data => {
    arrayObj.push(data);
  });
  return arrayObj;
}

export { fileDataToObject }