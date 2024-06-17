import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 2500,
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'center',
  titleSize: 25,
  messageSize: 25,
  backgroundColor: 'rgba(26, 255, 128, 0.8)',
});

const counterBottonEl = document.querySelector('.counter');
const inputDelayEl = document.querySelector('.timer-input');

counterBottonEl.addEventListener('click', event => {
  let currentDelay =
    inputDelayEl.value === '' ? 0 : parseInt(inputDelayEl.value);
  if (event.target.textContent === '+') {
    console.log('+');
    currentDelay += 1;
    inputDelayEl.value = currentDelay;
  } else if (event.target.textContent === '-') {
    currentDelay = currentDelay === 0 ? 0 : (currentDelay -= 1);
    inputDelayEl.value = currentDelay;
  }
});
