// Описан в документации
import flatpickr from "flatpickr";

// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// all modules
import Notiflix from 'notiflix';

// const timer = {
//   start() { 
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const { hours, mins, secs} = getTimeComponents(deltaTime);
     
//       console.log ('${hours}: ${mins}: ${secs}');
//     }, 1000);
//     }
// }

// timer.start()

// function updateClockfase({ hours, mins, secs }) {
//   refs.clockfase.textContent = '${hours}: ${mins}: ${secs}';}


// РЕПЕТА Принимает число , приводит к строке и добавляет  вначало 0 если число имеет меньше 2 х знаков

// function pad(value) {
//   return String(value).padStart(2, '0');
// }




// Принимает время в милисекундах
// ввычисляет скольько в них часов\минут\сек
// возвр объект со свойствами hours mins secs 
// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(
//     Math.floor((time % (1000 * 60 * 60 )) / (1000 * 60 )),
//   );
//   const secs = pad(
//     Math.floor((time % (1000 * 60 )) / 1000)
//   );

//   return { hours, mins, secs };
// }




//  Обратный отсчет 
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = document.querySelector('.value[data-days]');
  var hoursSpan = document.querySelector('.value[data-hours]');
  var minutesSpan = document.querySelector('.value[data-minutes]');
  var secondsSpan = document.querySelector('.value[data-seconds]');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);
































// flatpickr({
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
// });

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };






// const btnStart = document.querySelector('button[data-start]');

// btnStart.disabled = false;

// if (data) {
//     window.alert("Please choose a date in the future");
// }

// Выбор времени с ограничениями#
// {
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: "H:i",
//     minTime: "16:00",
//     maxTime: "22:30",
// }