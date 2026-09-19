let yesBtn = document.querySelector(".m-btn");
let noBtn = document.querySelector(".m-btn2");


noBtn.addEventListener("click", () => {
    noBtn.style.left = Math.random() * 300 + "px";
    noBtn.style.top = Math.random() * 90 + "px";
});
let btnDiv = document.querySelector(".btn-div");

yesBtn.addEventListener("click", () => {
    let bgvid = document.querySelector("#bg-video");
    bgvid.setAttribute("src", "/git-github-demo/335084_medium.mp4");
    let h = document.querySelector("#m-h");
    h.innerText = "Wo To main janta hi tha ❤️";

    let a = document.createElement("a");
    a.href = "/git-github-demo/Photos/photoPage.html";
    a.innerText = "Next Page";

    btnDiv.appendChild(a);
    a.style.textDecoration = "none";
    a.style.color = "white";
});