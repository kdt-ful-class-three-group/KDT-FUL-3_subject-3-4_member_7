import fs from "fs";
import { dataToJsonStringify } from "./dataToJsonStringify.js";
import { userDataToObject } from "./userDataToObject.js";
import { fileDataToObject } from "./fileDataToObject.js";

function createJSON(data) {
  //* 사용자 데이터를 객체로 만든다
  const userData = userDataToObject(data);
  //* 기존의 JSON파일을 가지고 온다.
  const fileData = fileDataToObject();
  //* 사용자 데이터에 기존의 데이터 push
  userData.push(fileData);
  //* 객체를 JSON문자열로 변환한다.
  const dataJSON = dataToJsonStringify(userData.flat());
  //* data.JSON으로 파일 생성
  fs.writeFileSync("data.JSON", dataJSON);
}

export { createJSON }