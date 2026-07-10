



// // ! hos sec
// let row_hos = document.getElementsByClassName("my_hos_row")[0];
// let childern = Array.from(row_hos.children);
// let play_video = document.getElementById("play_v");
// let Popup=document.getElementsByClassName("video_popup")[0] ;
// let close_video = Popup.children[0];
// let overloy = document.getElementsByClassName("overlay")[0];
// let title = document.getElementById("my_title");
// let hos = document.getElementsByClassName("hos")[0];



// console.log(overloy);

// play_video.addEventListener("click" , ()=>{
// Popup.style.display="block";
// overloy.style.display="block";
// })

// close_video.addEventListener("click" , ()=>{
//     Popup.style.display="none";
// overloy.style.display="none";
// })



// childern.forEach((ele)=>{
    
//  ele.children[0].addEventListener("click" , (e)=>{
//     e.preventDefault();
    
//  });


//   ele.addEventListener("click" , (b)=>{
    
// childern.forEach(item => {
//     item.classList.remove("click");

    
// })
// b.currentTarget.classList.add("click");
// hos.classList.add("fade");

// title.textContent = ele.dataset.title;

// setTimeout(()=>{
//     hos.classList.remove("fade");

// },200)

    
//   })  
// })





// // ! hos sec



let cards = Array.from(document.getElementsByClassName("doc_item"));
// console.log(cards);
cards.forEach((card)=>{
    let links = card.querySelector("h3 a");
    links.addEventListener("click" , ()=>{
        let name = links.textContent;
        let image = card.querySelector("img").src;
        let specialty = card.querySelector("span");
        let spe = specialty.textContent;
        localStorage.setItem("name" , name);
        localStorage.setItem("image" , image);
        localStorage.setItem("specialty" ,spe );
    })
})


























