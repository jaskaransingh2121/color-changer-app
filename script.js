const buttons = document.querySelectorAll("button")
const colorName = document.getElementById("color-name");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (btn.classList.contains("random")) {
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
      colorName.innerText = randomColor;
    } else if (btn.classList.contains("reset")) {
      document.body.style.backgroundColor = "white";
      colorName.innerText = "White";
    } else {
      const selectedColor = btn.classList[0];
      document.body.style.backgroundColor = selectedColor;
      colorName.innerText = selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1);
    }
  });
});