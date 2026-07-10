// // let ser = document.getElementById("Services");
//  let menu = document.getElementsByClassName("menu_2");
// // console.log(menu);
// let open = document.getElementsByClassName("open");
// let list_1 = document.getElementsByClassName("list_1")[0];
// let nav_bar = document.getElementsByClassName("nav-bar")[0]; 
// // console.log(nav_bar);

//  list_1.addEventListener("click" , ()=>{
// list_1.classList.toggle("active");
// nav_bar.classList.toggle("open_2");
// if (nav_bar.classList.contains("open_2")) {
//     nav_bar.style.height=nav_bar.scrollHeight+"px";    
// }
// else{

// nav_bar.style.height="0px";


// }
//  })

// // console.log(nav_bar.scrollHeight);


// // !//////////////////////////////////////////////////

// // console.log();


// let main_ul = document.getElementById("main_ul");
// let lis = main_ul.querySelectorAll(":scope>li");
// let liss = Array.from(lis).slice(2,6);
// // let links = [...liss].map(li=>li.querySelector(":scope > a"));
// // console.log(links);

// // console.log(liss);
// liss.forEach((item , i)=>{
// let firstchild = item.children[0];
// firstchild.addEventListener("click" ,(e)=>{

// e.preventDefault();

// menu[i].classList.toggle("open")

// if (menu[i].classList.contains("open")) {
//     menu[i].style.height=menu[i].scrollHeight+"px";    
// }
// else{

// menu[i].style.height="0px";

// }



// });


// })






// ! hos sec
let row_hos = document.getElementsByClassName("my_hos_row")[0];
let childern = Array.from(row_hos.children);
let play_video = document.getElementById("play_v");
let Popup=document.getElementsByClassName("video_popup")[0] ;
let close_video = Popup.children[0];
let overloy = document.getElementsByClassName("overlay")[0];
let title = document.getElementById("my_title");
let hos = document.getElementsByClassName("hos")[0];



// console.log(overloy);

play_video.addEventListener("click" , ()=>{
Popup.style.display="block";
overloy.style.display="block";
})

close_video.addEventListener("click" , ()=>{
    Popup.style.display="none";
overloy.style.display="none";
})



childern.forEach((ele)=>{
    
 ele.children[0].addEventListener("click" , (e)=>{
    e.preventDefault();
    
 });


  ele.addEventListener("click" , (b)=>{
    
childern.forEach(item => {
    item.classList.remove("click");

    
})
b.currentTarget.classList.add("click");
hos.classList.add("fade");

title.textContent = ele.dataset.title;

setTimeout(()=>{
    hos.classList.remove("fade");

},200)

    
  })  
})





// ! hos sec
