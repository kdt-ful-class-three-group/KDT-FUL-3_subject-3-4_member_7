function dataToJsonParse(data) {
  let jsonObj = [];
  if (data !== '') {
    jsonObj = JSON.parse(data);
  }
  return jsonObj;
}

export { dataToJsonParse }