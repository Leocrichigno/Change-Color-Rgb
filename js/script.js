document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);

const red = document.getElementById('rangeRed').value;
const green = document.getElementById('rangeGreen').value;
const blue = document.getElementById('rangeBlue').value;

function changeColor() {
  const red = document.getElementById('rangeRed').value;
  const green = document.getElementById('rangeGreen').value;
  const blue = document.getElementById('rangeBlue').value;
  const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.querySelector('.teste').style.backgroundColor = color;
  document.getElementById('valueRed').value = red;
  document.getElementById('valueGreen').value = green;
  document.getElementById('valueBlue').value = blue;
}
