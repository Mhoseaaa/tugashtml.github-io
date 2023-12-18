document.getElementById('color-button').addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const colors = ['#ff6f61', '#66b3ff', '#99ff99', '#ffffff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
