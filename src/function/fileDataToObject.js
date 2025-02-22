import { readDataFile } from "./readDataFile.js";
import { dataToJsonParse } from "./dataToJsonParse.js";

//* 파일을 배열 객체로 만드는 함수
function fileDataToObject() {
  const arrayObj = [];
  //* list.JSON 문자열을 가지고 오는 함수
  const dataJson = readDataFile();
  //* list.JSON 문자열을 객체화 하는 함수
  const dataObj = dataToJsonParse(dataJson);
  dataObj.forEach(data => {
    arrayObj.push(data);
  });
  return arrayObj;
}

export { fileDataToObject }