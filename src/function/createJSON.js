import fs from "fs";
import { dataToJsonStringify } from "./dataToJsonStringify.js";
import { createObject } from "./createObject.js";

function createJSON(data) {
  //* 사용자 데이터 객체로 만든다
  const dataObj = createObject(data);
  //* 객체를 JSON문자열로 변환한다.
  const dataJSON = dataToJsonStringify(dataObj);
  //* data.JSON으로 파일 생성
  fs.writeFileSync("data.JSON", dataJSON);
}

export { createJSON }