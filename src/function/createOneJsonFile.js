import fs from "fs";
import { dataToJsonStringify } from "./dataToJsonStringify.js";

//* 사용자의 데이터 하나만 가지고 json파일을 만드는 함수
//* 하나를 선택했을 때 화면에 표시되기 위해 파일을 만들어 준다.
function createOneJsonFile(data) {
  const dataJson = dataToJsonStringify(data);
  fs.writeFileSync('data.JSON', dataJson);
}

export { createOneJsonFile }