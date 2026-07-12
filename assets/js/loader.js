let load = document.getElementById("loader");
// console.log(load);
window.addEventListener("load" , ()=>{
    load.style.visibility="visible";
    // load.style.opacity= "1";
    
    setTimeout(()=>{
    load.style.visibility="hidden";
    load.style.opacity= "0";
    
    },1000)
})
