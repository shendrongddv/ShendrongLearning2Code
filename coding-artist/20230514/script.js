const btn = document.getElementById("btn");

let randomNum = () => {
  return Math.floor(Math.random() * 256);
};

let changeColor = () => {
  let randonColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  document.body.style.backgroundColor = randonColor;
};

btn.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);
