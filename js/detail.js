const buttons = document.querySelectorAll('button');
const content = document.querySelector('.content');
const title = document.querySelector('.title');

function createPageDetail() {
  fetch('data.JSON').then((response) => {
    return response.json();
  }).then((obj) => {
    title.lastElementChild.textContent = obj.title;
    content.lastElementChild.textContent = obj.content;    
    //* 수정 버튼 클릭시 발생하는 이벤트
    buttons[0].addEventListener('click', () => {
      location.href = `/pageModify?order=${obj.order}`;
    });
    //* 삭제 버튼 클릭시 발생하는 이벤트
    buttons[1].addEventListener('click', () => {
      location.href = `/pageDelete?order=${obj.order}`;
    });
  })
}

createPageDetail();