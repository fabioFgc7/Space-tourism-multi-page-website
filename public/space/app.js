
const btnOpen = document.getElementById("btn-open");
const btnClosed = document.getElementById("btn-closed");

const menu = document.querySelector(".menu");
const menuLi = document.querySelectorAll("li a")

btnOpen.addEventListener("click", function () {
    menu.classList.add("-translate-x-0");
    btnOpen.classList.add("hidden");
    btnClosed.classList.remove("hidden");
});
btnClosed.addEventListener("click", function () {
  menu.classList.remove("-translate-x-0");
  btnOpen.classList.remove("hidden");
  btnClosed.classList.add("hidden");
});
menuLi.forEach(el =>{
  el.addEventListener("click", function () {
    menu.classList.remove("-translate-x-96");
    btnOpen.classList.remove("hidden");
  btnClosed.classList.add("hidden");
  })
});




