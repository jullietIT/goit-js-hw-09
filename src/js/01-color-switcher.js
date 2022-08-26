


const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStop.disabled = true;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
    btnStop.disabled = false;
    


  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});


btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
});






// setInterval = startButton.addEventListener('click', start);

// setInterval(
// )

// const intervalId = setInterval(loger, 1000, 1000);
// if (intervalId) {
    
// }

// const clearTimeout = stopButton.addEventListener('click', stop);

// if (clearTimeout) {
//     clearInterval(intervalId);
// }


















