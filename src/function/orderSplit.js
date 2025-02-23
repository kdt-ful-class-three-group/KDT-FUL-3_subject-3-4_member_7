//* qs타입의 데이터를 받아와 = 기준으로 분해한뒤 = 뒤의 데이터를 반환하는 함수
//* 지정된 게시판을 들어가기 위해 만들어준 함수이다.
function orderSplit(data) {
  const splitData = data.split('=');
  return splitData[1];
}

export { orderSplit }