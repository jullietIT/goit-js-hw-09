// Описан в документации
import flatpickr from "flatpickr";

// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// all modules
import Notiflix from 'notiflix';

const timer = {
  start() { 
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { hours, mins, secs} = getTimeComponents(deltaTime);
     
      console.log ('${hours}: ${mins}: ${secs}');
    }, 1000);
    }
}

timer.start()

function updateClockfase({ hours, mins, secs }) {
  refs.clockfase.textContent = '${hours}: ${mins}: ${secs}';}


// РЕПЕТА Принимает число , приводит к строке и добавляет  вначало 0 если число имеет меньше 2 х знаков

function pad(value) {
  return String(value).padStart(2, '0');
}




// Принимает время в милисекундах
// ввычисляет скольько в них часов\минут\сек
// возвр объект со свойствами hours mins secs 
function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(
    Math.floor((time % (1000 * 60 * 60 )) / (1000 * 60 )),
  );
  const secs = pad(
    Math.floor((time % (1000 * 60 )) / 1000)
  );

  return { hours, mins, secs };
}



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