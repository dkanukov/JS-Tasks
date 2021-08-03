let input = document.createElement('input');
let header = document.createElement("h2");
document.body.append(header);
document.body.append(input);

function headerInput() {
  header.innerHTML = input.value;
  setTimeout(headerInput, 300);
}

setTimeout(headerInput, 300);
