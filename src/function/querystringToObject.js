//* querystring형식의 데이터를 처리하기 위해서 import
import qs from "querystring";
//* 사용자가 입력한 데이터를 받는 객체
import { object } from "../const/pageWriteData.js";

function querystringToObject(data) {
  //* 받아온 데이터를 객체화 해준다.
  const dataObj = qs.parse(data.toString());
  //* 변화된 데이터를 객체에 담는다.
  object.order = 0;
  object.title = dataObj.title;
  object.content = dataObj.content;
  object.createDate = "2025-02-20";

  return object;
}

export { querystringToObject }