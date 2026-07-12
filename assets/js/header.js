// let ser = document.getElementById("Services");
 let menu = document.getElementsByClassName("menu_2");
// console.log(menu);
let open = document.getElementsByClassName("open");
let list_1 = document.getElementsByClassName("list_1")[0];
let nav_bar = document.getElementsByClassName("nav-bar")[0]; 
// ! loader 
let loader = document.getElementById("loader");

// ! loader

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

// console.log(nav_bar.scrollHeight);


// !//////////////////////////////////////////////////

// console.log();


const links = document.querySelectorAll("header a");
const currentTarget = window.location.pathname.split("/").pop();
//  console.log(currentTarget);

links.forEach((link)=>{
    // console.log(link.getAttribute("href"));
    const prant = link.closest(".pages");
     const prant_2 = link.closest(".has-menu");
    //  console.log(prant_2);
     
    
    // if(prant){
    //     const prant_fc = prant.firstElementChild;
    //     prant_fc.classList.add("page_active");
    // }
    
    
    if (link.getAttribute("href") === currentTarget    ){
    // console.log("be");
        // prant.classList.add("page_active");
        link.classList.add("page_active");
        if(prant ){
        const prant_fc = prant.firstElementChild;
        
        prant_fc.classList.add("page_active");
        // prant_2.classList.add("page_active")

    }
    if(prant_2 ){
        // console.log("sal");
         prant_2.querySelector(".head-menu a").classList.add("page_active");
        // console.log(prant_fc_2);
        // console.log("Besgoy");
        
        
    }
}
    // console.log("bes");
    
    // if(prant_2   ){
    //     // console.log("sal");
    //     const prant_fc_2 = prant_2.firstElementChild;
    //     prant_fc_2.classList.add("page_active");
    //     console.log(prant_fc_2);
    //     // console.log("Besgoy");
        
        
    // }
        
    
})


// for (const link of links){
//     console.log(link.getAttribute("href"));
//     const prant = link.closest(".pages");
//     // const prant_2 = link.closest(".")
//     if (link.getAttribute("href") === currentTarget ){
//     console.log("be");
//         link.classList.add("page_active");
//         if(prant){
//         const prant_fc = prant.firstElementChild;
//         prant_fc.classList.add("page_active");
//     }
//         break;
//     }
// }












const lg_links =document.querySelectorAll(".pages > a:first-child");
lg_links.forEach((lg_link)=>{
    lg_link.addEventListener("click" , (e)=>{
        e.preventDefault();
    })
})












let main_ul = document.getElementById("main_ul");
let lis = main_ul.querySelectorAll(":scope>li");

let liss = Array.from(lis).slice(2,6);
// let links = [...liss].map(li=>li.querySelector(":scope > a"));
// console.log(links);

// console.log(liss);
liss.forEach((item , i)=>{
let firstchild = item.children[0];
firstchild.addEventListener("click" ,(e)=>{

e.preventDefault();

// let op= e.target;
// op.style.color = "red";


menu[i].classList.toggle("open")

if (menu[i].classList.contains("open")) {
    menu[i].style.height=menu[i].scrollHeight+"px";    
}
else{

menu[i].style.height="0px";

}

//loader
// loader.style.display="block";
// setTimeout(()=>{
//     // window.location.href=firstchild[0].href;
//     loader.style.display="none";
// },2000);


});


})  










// !loader

let load = document.getElementById("loader");
// console.log(load);
window.addEventListener("load" , ()=>{
    // load.style.visibility="visible";
    // load.style.opacity= "1";
    loader.classList.add("hide");
    loader.addEventListener("transitionend",()=>{
        loader.style.visibility = "hidden";
    },{once : true});
});
// !loader


