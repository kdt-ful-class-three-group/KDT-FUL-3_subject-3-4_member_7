import fs from 'fs';
import { dataToJsonStringify } from "./dataToJsonStringify.js";
import { readDataFile } from "./readDataFile.js"
import { dataToJsonParse } from './dataToJsonParse.js';

function updateListJson(data) {
  const dataObj = readDataFile();
  const dataJSON = dataToJsonParse(dataObj);
  dataJSON.forEach(obj => {
    if(obj.order == data.order) {
      obj.order = data.order;
      obj.title = data.title;
      obj.content = data.content;
      obj.createDate = new Date().toLocaleString();
    }
  });
  const dataModify = dataToJsonStringify(dataJSON);
  fs.writeFileSync("list.JSON", dataModify);
  console.log(dataModify);
}

export { updateListJson }