function dataToJsonStringify(data) {
  //* 데이터 JSON 문자열로 만들기
  const dataJSON = JSON.stringify(data, null, 2);
  return dataJSON;
}

export { dataToJsonStringify }