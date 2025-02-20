import { querystringToObject } from "./querystringToObject.js"

function createObject(data) {
  //* json 형식으로 만들기 위해 배열 생성
  const arrayObj = [];
  //* querystringToObject함수에서 객체를 받아준다.
  const object = querystringToObject(data);
  arrayObj.push(object);
  return arrayObj;
}

export { createObject }