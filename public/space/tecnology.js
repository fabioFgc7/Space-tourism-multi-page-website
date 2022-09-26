const tecnology = [
    {
        id:1,
        name: "VEHICLE PORTRAIT",
        img: "./public/img/technology/image-launch-vehicle-portrait.jpg",
        description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        id:2,
        name: "CAPSULE PORTRAIT",
        img: "./public/img/technology/image-space-capsule-portrait.jpg",
        description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    },
    {
        id:3,
        name: "SPACEPORT PORTRAIT",
        img: "./public/img/technology/image-spaceport-portrait.jpg",
        description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    }
];


const nameCapsule = document.getElementById("name");
const imagen = document.getElementById("image");
const description = document.getElementById("description");

const btnUno = document.getElementById("btn-1");
const btnDos = document.getElementById("btn-2");
const btnTres = document.getElementById("btn-3");

function tegnologyObject(id){
    const items = tecnology[id];
    imagen.src = items.img;
    nameCapsule.innerHTML = items.name;
    description.innerHTML = items.description;

};

btnUno.addEventListener("click", function () {
    tegnologyObject(0);

});
btnDos.addEventListener("click", function () {
    tegnologyObject(1);

});
btnTres.addEventListener("click", function () {
    tegnologyObject(2);

});
tegnologyObject(0);

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
