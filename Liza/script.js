const btnUp = document.getElementById("btn-up");

btnUp.onclick = () => {
  window.scrollTo(0, 0);
};

let buttonOn = false;
btnUp.style.display = "none";

window.addEventListener("scroll", function () {
  let scroll = this.scrollY;

  if (scroll < 200 && buttonOn) {
    btnUp.style.display = "none";
    buttonOn = false;
  } else if (scroll > 500 && !buttonOn) {
    btnUp.style.display = "block";
    buttonOn = true;
  }
});
