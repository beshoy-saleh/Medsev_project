// let ser = document.getElementById("Services");
 let menu = document.getElementsByClassName("menu_2");
console.log(menu);
let open = document.getElementsByClassName("open");
let list_1 = document.getElementsByClassName("list_1")[0];
let nav_bar = document.getElementsByClassName("nav-bar")[0]; 
console.log(nav_bar);

 list_1.addEventListener("click" , ()=>{
list_1.classList.toggle("active");
nav_bar.classList.toggle("open_2");
if (nav_bar.classList.contains("open_2")) {
    nav_bar.style.height=nav_bar.scrollHeight+"px";    
}
else{

nav_bar.style.height="0px";


}
 })

console.log(nav_bar.scrollHeight);


// !//////////////////////////////////////////////////

console.log();


let main_ul = document.getElementById("main_ul");
let lis = main_ul.querySelectorAll(":scope>li");
let liss = Array.from(lis).slice(2,6);
// let links = [...liss].map(li=>li.querySelector(":scope > a"));
// console.log(links);

console.log(liss);
liss.forEach((item , i)=>{

item.addEventListener("click" ,(e)=>{

e.preventDefault();

menu[i].classList.toggle("open")

if (menu[i].classList.contains("open")) {
    menu[i].style.height=menu[i].scrollHeight+"px";    
}
else{

menu[i].style.height="0px";

}



});


})
