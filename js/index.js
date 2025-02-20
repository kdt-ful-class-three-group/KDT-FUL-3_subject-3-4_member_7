import { object } from "../src/const/pageWriteData.js"

function createList() {
  const contentDiv = document.querySelector('.content');
  const parentDiv = document.createElement('div');
  parentDiv.classList.add("display-grid", "grid-tem-col-1fr2");
  for (let i = 0; i < 5; i++) {
    //todo 해당 데이터는 임의로 정의해 줬지만 추후 JSON파일을 읽어와서 데이터를 처리하도록 할 예정
    object.title = "제목";
    object.createDate = "2025-01-01";
    const childDiv = [document.createElement('div'), document.createElement('div')];
    childDiv[0].textContent = object.title;
    childDiv[1].textContent = object.createDate;
    parentDiv.append(childDiv[0], childDiv[1]);
  }
  contentDiv.append(parentDiv);
}

createList();