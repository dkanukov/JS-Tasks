let input = document.createElement('input');
let header = document.createElement("h2");
let timeoutId;

document.body.append(header);
document.body.append(input);

function inputText() {
  header.innerHTML = input.value;
}

function trackInput() {
  clearTimeout(timeoutId);
  input.oninput = function()
  { 
    clearTimeout(timeoutId);
    timeoutId = setTimeout(inputText, 300);
  }
}

trackInput();
