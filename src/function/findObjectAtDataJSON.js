import { createOneJsonFile } from "./createOneJsonFile.js";
import { fileDataToObject } from "./fileDataToObject.js"

function findObjectAtDataJSON(order) {
  const dataObj = fileDataToObject();
  dataObj.forEach(data => {
    if(data.order == order) {
      createOneJsonFile(data);
    }
  });
}

export { findObjectAtDataJSON }