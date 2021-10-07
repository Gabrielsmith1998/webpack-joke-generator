const jokeContainer = document.querySelector('#joke');
const punchLineContainer = document.querySelector('#punch-line');
const btn = document.querySelector('#btn');

const renderJoke = (item) => new Promise(() => {
  jokeContainer.innerHTML = `${item.setup}`;
  punchLineContainer.innerHTML = `${item.delivery}`;
  punchLineContainer.style.display = 'none';
  btn.innerHTML = 'Get Punch Line';
  document.querySelector('#btn').id = 'punchLine';
});

export default renderJoke;
