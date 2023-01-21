// Variables

let randomNum = Math.ceil(Math.random() * 100);
const input = document.querySelector(".num");
const buton = document.getElementsByClassName("btn")[0];
const again = document.getElementsByClassName("try-again")[0];
let result = document.getElementsByClassName("up-down")[0];
let life = 6;
let remainingLife = document.getElementsByClassName("life");

buton.addEventListener("click", () => {
  if (+input.value === randomNum) {
    result.innerHTML = "You Win!";
  } else if (+input.value < randomNum) {
    result.innerHTML = "Up!";
    life--;
  } else if (+input.value > randomNum) {
    result.innerHTML = "Down!";
    life--;
  }

  if (life === 0) {
    result.innerHTML = `Try Again! The number was ${randomNum}`;
    randomNum = Math.ceil(Math.random() * 100);
    life = 6;
    input.value = "";
  } else {
    result.innerHTML += ` You have ${life} chances left.`;
  }
  input.value = "";
  input.focus();
});

again.addEventListener("click", () => {
  window.location.reload();
});
