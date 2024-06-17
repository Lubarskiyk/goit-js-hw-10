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

const counterButtonEl = document.querySelector('.counter');
const inputDelayEl = document.querySelector('.timer-input');
const startButtonEl = document.querySelector('.button-start');
startButtonEl.addEventListener('click', handlerButtonStart);
inputDelayEl.value = '0';

counterButtonEl.addEventListener('click', event => {
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

function validateForm() {
  const inputIsCheked = document.querySelector('input[name="state"]:checked');
  if (parseInt(inputDelayEl.value) <= 0) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter delay >0',
    });

    return;
  }
  if (!inputIsCheked) {
    iziToast.error({
      title: 'Error',
      message: 'Please checked state',
    });
    return;
  }
  return [inputDelayEl.value, inputIsCheked.value];
}

function handlerButtonStart(event) {
  let delay;
  let state;
  event.preventDefault();
  const isvalid = validateForm();
  if (isvalid) {
    [delay, state] = isvalid;
    createPromise(parseInt(delay), state);
  }
}

function createPromise(delay, state) {
  const isSuccess = state;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  // Registering promise callbacks
  promise
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
      });
    });
}
