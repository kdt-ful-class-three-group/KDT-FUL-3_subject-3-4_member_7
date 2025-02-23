//* 데이터를 JSON을 사용해서 객체화를 진행하는 함수
//* 보통 파일을 가지고 오면 JSON문자열이 되는데 해당 데이터를 가지고 와서 사용되는 경우가 많다.
function dataToJsonParse(data) {
  let jsonObj = [];
  //* 입력받은 데이터가 ''인 상태로 진행하게 된다면 에러가 발생을 하기에 ''상태가 아닌지 확인해준다.
  if (data !== '') {
    jsonObj = JSON.parse(data);
  }
  return jsonObj;
}

export { dataToJsonParse }