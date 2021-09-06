let input = document.createElement('input');
let header = document.createElement("h2");
let timeoutId;
document.body.append(header);
document.body.append(input);

function headerInput() {
  header.innerHTML = input.value;
  clearTimeout(timeoutId);
}

timeoutId = setTimeout(headerInput, 3000);
