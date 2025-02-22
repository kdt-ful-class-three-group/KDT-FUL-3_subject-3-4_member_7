import { dataToJsonParse } from "./dataToJsonParse.js";
import { readDataFile } from "./readDataFile.js";

function getOrder() {
  let order = 0;
  const dataFile = readDataFile();
  const dataObj = dataToJsonParse(dataFile);
  dataObj.forEach(() => {
    order++;
  });

  return order;
}

export { getOrder }