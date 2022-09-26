//DESTINATION
const tourismSistem = [
    {
      id: 1,
      name: "MOON",
      img: "/public/img/destination/image-moon.webp",
      description:
        "The Moon is Earth's only natural satellite. Together with Earth it forms the Earth–Moon satellite system. It is about one-quarter of Earth in diameter (comparable to the width of Australia).[16] In the Solar System it is the fifth largest satellite, larger than any of the known dwarf planets and the largest (and most massive) satellite of a planet relative to the planet.",
      ditance: "362 600 km",
      mes: "3 DAYS",
    },
    {
      id: 2,
      name: "MARS",
  
      img: "/public/img/destination/image-mars.webp",
      description:
        "​Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.",
      ditance: "225 MIL. KM",
      mes: "9 MONTHS",
    },
    {
      id: 3,
      name: "EUROPA",
  
      img: "/public/img/destination/image-europa.webp",
      description:
        "Europa may be the most promising place in our solar system to find present-day environments suitable for some form of life beyond Earth.",
      ditance: "628.3 millones km",
      mes: "3 YEARS",
    },
    {
      id: 4,
      name: "TITAN",
  
      img: "/public/img/destination/image-titan.webp",
      description:
        "Saturn’s largest moon Titan is an extraordinary and exceptional world. Among our solar system’s more than 150 known moons, Titan is the only one with a substantial atmosphere. And of all the places in the solar system, Titan is the only place besides Earth known to have liquids in the form of rivers, lakes and seas on its surface.",
      ditance: "746 million miles",
      mes: "6 to 10 YEARS",
    },
  ];
  
  const moon = document.getElementById("moon");
  const mars = document.getElementById("mars");
  const europa = document.getElementById("europa");
  const titan = document.getElementById("titan");
  const namePlanet = document.getElementById("name");
  const description = document.getElementById("description");
  const imagenPlanets = document.getElementById("img");
  const distance = document.getElementById("distance");
  const months = document.getElementById("months");
  
  function planetsSistem(id) {
    const items = tourismSistem[id];
    imagenPlanets.src = items.img;
    description.innerHTML = items.description;
    namePlanet.innerHTML = items.name;
    distance.innerHTML = items.ditance;
    months.innerHTML = items.mes;
  }
  moon.addEventListener("click", function () {
    planetsSistem(0);
    console.log("Hola");
  });
  mars.addEventListener("click", function () {
    planetsSistem(1);
    console.log("Hola");
  });
  europa.addEventListener("click", function () {
    planetsSistem(2);
    console.log("Hola");
  });
  titan.addEventListener("click", function () {
    planetsSistem(3);
    console.log("Hola");
  });
  planetsSistem(0);

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
