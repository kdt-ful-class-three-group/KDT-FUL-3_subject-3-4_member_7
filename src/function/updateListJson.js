import fs from 'fs';
import { dataToJsonStringify } from "./dataToJsonStringify.js";
import { readDataFile } from "./readDataFile.js"
import { dataToJsonParse } from './dataToJsonParse.js';

//* 수정된 데이터를 가지고 게시판을 수정해주는 함수
function updateListJson(data) {
  //* list.JSON파일을 불러온다.
  const dataObj = readDataFile();
  //* 불러온 문자열을 객체로 변환한다.
  const dataJSON = dataToJsonParse(dataObj);
  dataJSON.forEach(obj => {
    //* 객체중 수정할 데이터의 order번호와 일치하는 객체를 찾는다.
    if(obj.order == data.order) {
      obj.order = data.order;
      obj.title = data.title;
      obj.content = data.content;
      obj.createDate = new Date().toLocaleString();
    }
  });
  //* 수정된 객체를 파일로 만들어주기 위해 JSON문자열로 변화한다.
  const dataModify = dataToJsonStringify(dataJSON);
  //* list.JSON파일을 만든다.
  fs.writeFileSync("list.JSON", dataModify);
}

export { updateListJson }