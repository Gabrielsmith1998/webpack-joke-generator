const punchLineContainer = document.querySelector('#punch-line');
const btn = document.querySelector('#btn');

const newPunchLine = (item) => new Promise(() => {
  punchLineContainer.innerHTML = `${item.delivery}`;
  punchLineContainer.style.display = 'block';
  btn.innerHTML = 'Get Another Joke';
  document.querySelector('#punchLine').id = 'btn';
});
export default newPunchLine;
