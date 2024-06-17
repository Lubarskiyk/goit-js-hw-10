import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  position: 'center',
  onClose(selectedDates) {
    ckeckDate(selectedDates[0]);
  },
};

iziToast.settings({
  timeout: 3000,
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'center',
  titleSize: 25,
  messageSize: 25,
  backgroundColor: 'rgba(26, 255, 128, 0.8)',
});

const timerEl = {
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),

  clearTimer() {
    this.daysEl.textContent = 'XX';
    this.hoursEl.textContent = 'XX';
    this.minutesEl.textContent = 'XX';
    this.secondsEl.textContent = 'XX';
  },
  setTimer(timernew) {
    this.daysEl.textContent = timernew.days.padStart(2, '0');
    this.hoursEl.textContent = timernew.hours.padStart(2, '0');
    this.minutesEl.textContent = timernew.minutes.padStart(2, '0');
    this.secondsEl.textContent = timernew.seconds.padStart(2, '0');
  },
};

const inputDateEl = document.querySelector('#datetime-picker');
const buttonStartEl = document.querySelector('.button-start');

buttonStartEl.disabled = true;
timerEl.clearTimer();

flatpickr('#datetime-picker', options);

let totalms = 0;
let MyTimer;

function ckeckDate(userDate) {
  totalms = userDate.getTime() - Date.now();
  if (totalms <= 0) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
    });
  } else activatedButtom();
}

function activatedButtom() {
  inputDateEl.disabled = true;
  buttonStartEl.disabled = false;
  buttonStartEl.addEventListener('click', hanlerButtomStart);
}

function hanlerButtomStart() {
  buttonStartEl.disabled = true;
  MyTimer = setInterval(startTimer, 1000);
}

function startTimer() {
  timerEl.setTimer(convertMs(totalms));
  if (totalms >= 1000) {
    totalms -= 1000;
  } else {
    timerEl.clearTimer();
    inputDateEl.disabled = !inputDateEl.disabled;
    clearInterval(MyTimer);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day).toString();
  const hours = Math.floor((ms % day) / hour).toString();
  const minutes = Math.floor(((ms % day) % hour) / minute).toString();
  const seconds = Math.floor(
    (((ms % day) % hour) % minute) / second
  ).toString();

  return { days, hours, minutes, seconds };
}
