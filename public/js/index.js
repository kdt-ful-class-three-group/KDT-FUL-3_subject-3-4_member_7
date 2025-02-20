import pageWriteData from "../../src/const/pageWriteData.js"

function createList() {
  const contentDiv = document.querySelector('.content');
  const parentDiv = document.createElement('div');
  for(let i=0; i<5; i++) {
    pageWriteData.title = "제목" + i;
    pageWriteData.createDate = "2025-01-01";
    const childDiv = [document.createElement('div'), document.createElement('div')];
    childDiv[0].textContent = pageWriteData.title;
    childDiv[1].textContent = pageWriteData.createDate;
    parentDiv.append(childDiv);
  }
  contentDiv.append(parentDiv);
  console.log(div);
}

createList();