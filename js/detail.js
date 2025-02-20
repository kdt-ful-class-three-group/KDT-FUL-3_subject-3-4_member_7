function createPageDetail() {
  const contentDiv = document.querySelector('.content');
  const titleDiv = document.querySelector('.title');
  contentDiv.lastElementChild.textContent = "입력한 제목입니다.";
  titleDiv.lastElementChild.textContent = "입력한 내용입니다.";
}

createPageDetail();