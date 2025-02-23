import { dataToJsonParse } from "./dataToJsonParse.js";
import { readDataFile } from "./readDataFile.js";

//* 마지막 order번호를 찾는 함수
function findLastOrder() {
  let order = 0;
  //* list.JSON 문자열을 가지고온다.
  const dataFile = readDataFile();
  //* 받아온 문자열을 객체화 한다.
  const dataObj = dataToJsonParse(dataFile);
  dataObj.forEach(() => {
    //* 객체의 수만큼 order가 증가한다.
    order++;
  });

  return order;
}

export { findLastOrder }