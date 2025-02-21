function dataToJsonParse(data) {
  const jsonObj = [];
  if (data !== '') {
    jsonObj = JSON.parse(data);
  }
  return jsonObj;
}

export { dataToJsonParse }