const buttons = document.querySelectorAll('button');
const contentDiv = document.querySelector('.content');
const titleDiv = document.querySelector('.title');

function createPageDetail() {
  fetch('data.JSON').then((response) => {
    return response.json();
  }).then((obj) => {
    contentDiv.lastElementChild.textContent = obj.title;
    titleDiv.lastElementChild.textContent = obj.content;    
    //* 수정 버튼 클릭시 발생하는 이벤트
    buttons[0].addEventListener('click', () => {
      location.href = `/pageModify?order=${obj.order}`;
    });
  })
}

createPageDetail();