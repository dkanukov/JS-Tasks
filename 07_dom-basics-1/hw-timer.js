let timeInput = document.querySelector('.time-input');
let timerButton = document.querySelector('.timer-button');
let currentTime = document.querySelector('.current-time');

function onClick() {
  currentTime.textContent = timeInput.value;
}

function timer() {
  if (currentTime.textContent !== '0') {
    let currentTimeNumber = parseInt(currentTime.textContent);
    currentTime.textContent = currentTimeNumber - 1;
  }
}

timerButton.addEventListener('click', onClick);
setInterval(timer, 1000);
