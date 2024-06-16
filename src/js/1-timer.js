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

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

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
  } else MyTimer = setInterval(setTimer, 1000);
}

function setTimer() {
  const timernew = convertMs(totalms);
  days.textContent = timernew.days.padStart(2, '0');
  hours.textContent = timernew.hours.padStart(2, '0');
  minutes.textContent = timernew.minutes.padStart(2, '0');
  seconds.textContent = timernew.seconds.padStart(2, '0');
  if (totalms >= 1000) {
    totalms -= 1000;
  } else {
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
