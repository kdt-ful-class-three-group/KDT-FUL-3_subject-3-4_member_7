import fs from "fs";

//* list.JSON파일을 읽어오는 함수
function readDataFile() {
  let data = '';
  //* list.JSON파일을 읽어온다.
  if(fs.existsSync('list.JSON')) {
    const dataFile = fs.readFileSync("list.JSON");
    //* 읽어온 json파일은 buffer에 담아져있는 상태이기 때문에 이를 문자열로 변화한다.
    data = dataFile.toString();
  }
  return data;
}

export { readDataFile }