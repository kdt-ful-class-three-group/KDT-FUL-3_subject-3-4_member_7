//* querystring형식의 데이터를 처리하기 위해서 import
import qs from "querystring";

function querystringToObject(data) {
  //* 받아온 데이터를 객체화 해준다.
  const dataObj = qs.parse(data.toString());
  return dataObj;
}

export { querystringToObject }