function createList() {
  const contentDiv = document.querySelector('.content');
  const parentDiv = document.createElement('div');
  parentDiv.classList.add("display-grid", "grid-tem-col-1fr2");
  //* JSON파일을 불러올 때 fetch를 사사용해준다.
  //* data.JSON을 서버에 요청을 하기에 서버에서 /data.JSON 요청방식을 처리해줘야 한다.
  fetch("data.JSON").then((response) => {
    //* 요청이 정삭적으로 동작했다면 json파일을 가지고 왔기에 객체로 변환해준다.
    return response.json();
    //* text는 response.json의 값이 되며 객체화 된 데이터가 된다.
  }).then((text) => {
    //* 배열안에 객체 수 만큼 반복을 진행하게 된다.
    text.forEach(obj => {
      const childDiv = [document.createElement('div'), document.createElement('div')];
      childDiv[0].textContent = obj.title;
      childDiv[1].textContent = obj.createDate;
      parentDiv.append(childDiv[0], childDiv[1]);
      setClickEvent(childDiv[0]);
    });
  })
  contentDiv.append(parentDiv);
}

createList();

function setClickEvent(div) {
  div.addEventListener('click', () => {
    location.href = `/pageDetail?order=${div.getAttribute('id')}`;
  })
}