const content = document.getElementsByName('content');
const title = document.getElementsByName('title');
const form = document.getElementsByTagName('form');
const button = document.getElementsByTagName('button');

function createPageDetail() {
  fetch('data.JSON').then((response) => {
    return response.json();
  }).then((obj) => {
    content[0].value = obj.content;
    title[0].value = obj.title;
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