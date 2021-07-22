let content = document.querySelector('#content');
let result = document.querySelector('#result');

content.addEventListener('keydown', count);
content.addEventListener('keyup', count);

function count() {
  result.value = content.value.length;
}
