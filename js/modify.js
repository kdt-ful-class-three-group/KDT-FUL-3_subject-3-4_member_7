const content = document.getElementsByName('content');
const title = document.getElementsByName('title');
const form = document.getElementsByTagName('form');
const button = document.getElementsByTagName('button');

//* 글 수정을 위해서 만들어진 함수
function createPageDetail() {
  //* data.JSON에 담긴 파일을 가지고 온다.
  fetch('data.JSON').then((response) => {
    return response.json();
  }).then((obj) => {
    //* 제목, 내용을 담아서 표시한다.
    content[0].value = obj.content;
    title[0].value = obj.title;
    //* 수정 완료 버튼을 누르면 데이터가 서버에 전송된다.
    button[0].addEventListener('click', () => {
      const input = document.createElement("input");
      input.setAttribute("name", "order");
      input.setAttribute("type", "hidden");
      input.value = obj.order;
      form[0].append(input);
      form[0].submit();
    })
  })
}

createPageDetail();