let pic1 = document.querySelector(".pic1");
let pic2 = document.querySelector(".pic2");
let pic3 = document.querySelector(".pic3");
let pic4 = document.querySelector(".pic4");

let m = document.querySelector(".photos");
m.addEventListener("click", ()=>{
    bgmusic.play();
})
pic1.addEventListener("click" , ()=>{
    pic1.src = "./ForSomeOneSpecial/bff-1.jpeg"
})
pic2.addEventListener("click" , ()=>{
    pic2.src = "./ForSomeOneSpecial/bff-2.jpeg"
})
pic3.addEventListener("click" , ()=>{
    pic3.src = "./ForSomeOneSpecial/WhatsApp Image 2026-09-19 at 10.09.30 PM.jpeg"
})
pic4.addEventListener("click" , ()=>{
    pic4.src = "./ForSomeOneSpecial/bff-4.jpeg"
})
