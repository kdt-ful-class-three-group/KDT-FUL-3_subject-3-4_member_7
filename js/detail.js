function createPageDetail() {
  const contentDiv = document.querySelector('.content');
  const titleDiv = document.querySelector('.title');
  //todo 해당 데이터는 임의로 정의해 줬지만 추후 JSON데이터를 활용하여 처리할 예정
  contentDiv.lastElementChild.textContent = "입력한 제목입니다.";
  titleDiv.lastElementChild.textContent = "입력한 내용입니다.";
}

createPageDetail();