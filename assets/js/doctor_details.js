let name = localStorage.getItem("name");
let image = localStorage.getItem("image");
let specialty = localStorage.getItem("specialty")
let col_left = document.getElementsByClassName("doctor_detail_left")[0];
let spe_hero = document.querySelector(".title_ser h3");
let pragraph = document.querySelector(".title_ser p");
pragraph.textContent = `MBBS in ${specialty}, PHD in ${specialty}.`
spe_hero.textContent = specialty; 
let hero_name = document.querySelector(".title_ser h2");
hero_name.textContent = name;
let image_left = col_left.children[0];
image_left.src = image;
// console.log(col_left);
