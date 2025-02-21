import fs from "fs";
import { dataToJsonStringify } from "./dataToJsonStringify.js";

function createJSON(data) {
  const dataJSON = dataToJsonStringify(data);
  //* data.JSON으로 파일 생성
  fs.writeFileSync("data.JSON", dataJSON);
}

export { createJSON }