import { createOneJsonFile } from "./createOneJsonFile.js";
import { fileDataToObject } from "./fileDataToObject.js"

//* list.JSON 객체를 지정한 order값이랑 일치하는 객체를 찾는 함수
function findObjectAtDataJSON(order) {
  //* list.JSON 객체를 가지고 온다.
  const dataObj = fileDataToObject();
  //* 객체 수만큼 반복을 진행한다.
  dataObj.forEach(data => {
    //* 받은 order의 번호를 찾는다.
    if(data.order == order) {
      createOneJsonFile(data);
    }
  });
}

export { findObjectAtDataJSON }