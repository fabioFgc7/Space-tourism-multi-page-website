const person = [{
    id:1,
    nombre: "ANOUSEN ANSARI",
    role: "Flight Engineer",
    img: "./public/img/crew/image-anousheh-ansari.webp",
    descripcion: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",

},
{
    id:2,
    nombre: "DOUGLAS HURLEY",
    role: "Commander",

    img: "./public/img/crew/image-douglas-hurley.png",
    descripcion: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",

},
{
    id:3,
    nombre: "MARK SHUTTLEWORTH",
    role: "Mission Specialist",
    img: "./public/img/crew/image-mark-shuttleworth.webp",
    descripcion: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",

},
{
    id:4,
    nombre: "VICTOR GLOVER",
    role: "Pilot",

    img: "./public/img/crew/image-victor-glover.webp",
    descripcion: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",

}
];

const imgPerson = document.getElementById("imagen");
const role = document.getElementById("role");

const descripcionPerson = document.getElementById("descripcion");
const namePerson = document.getElementById("nombre");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");


function personAdd(id){
    const user = person[id];
    imgPerson.src = user.img;
    role.innerHTML = user.role;
    namePerson.innerHTML= user.nombre;
    descripcionPerson.innerHTML = user.descripcion;

}

btn1.addEventListener("click", function () {
    personAdd(0);
});
btn2.addEventListener("click", function () {
    personAdd(1);
});
btn3.addEventListener("click", function () {
    personAdd(2);
});
btn4.addEventListener("click", function () {
    personAdd(3);
    btn4.style = "focus:blue;"
});
personAdd(0);

// BOTTONS

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

