let yes = document.getElementById("yes");
let no = document.getElementById("no");
let msg = document.getElementById("msg");
let main = document.getElementById("main-container");

no.addEventListener("mouseover", () => {
    no.style.position = "absolute";
    no.style.top = Math.floor(Math.random() * 40) + "vh";
    no.style.right = Math.floor(Math.random() * 40) + "vw";

    let audio = document.getElementById("no-please");
    audio.play();
})

yes.addEventListener("click", () => {
    msg.style.display = "block"
    main.style.display = "none"

    let audio = document.getElementById("thankyou");
    audio.play();
})

msg.addEventListener("click", () => {

    main.style.display = "block";
    msg.style.display = "none";
    no.style.position = "static";
})

