let input = document.createElement('input');
let header = document.createElement("h2");
let timeoutId;
document.body.append(header);
document.body.append(input);

function headerInput() {
  clearTimeout(timeoutId);
  header.innerHTML = input.value;
  setTimeout(headerInput, 300)
}

timeoutId = setTimeout(headerInput, 300);


