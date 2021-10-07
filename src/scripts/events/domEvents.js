import getJoke from '../helpers/jokeData';
import renderJoke from '../helpers/newJoke';
import newPunchLine from '../helpers/newPunchLine';

let joke = {};
const domEvents = () => {
  document.querySelector('#jokeContainer').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('btn')) {
      getJoke().then((newJoke) => {
        renderJoke(newJoke);
        joke = newJoke;
      });
    }
    if (e.target.id.includes('punchLine')) {
      newPunchLine(joke);
    }
  });
};

export default domEvents;
