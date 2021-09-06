let timeInput = document.querySelector('.time-input');
let timerButton = document.querySelector('.timer-button');
let currentTime = document.querySelector('.current-time');

let current = 0;
let timer;

function startTimer() {
  currentTime.textContent = --current;
  if (current <= 0)
    timer = clearInterval(timer);
}

function onClick() {
  timer = clearInterval(timer);  
  current = timeInput.value;
  if (current != 0) {
    currentTime.textContent = current;
    timer = setInterval(startTimer, 1000);
  }
}

timerButton.addEventListener('click', onClick);