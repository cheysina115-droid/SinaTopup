// ===============================
// SinaTopup v1.0
// script.js
// ===============================

// Demo Check Username
function checkID() {
    const inputs = document.querySelectorAll(".player input");
    const gameId = inputs[0].value.trim();
    const serverId = inputs[1].value.trim();
    const username = document.getElementById("username");

    if (gameId === "" || serverId === "") {
        username.innerHTML = "❌ Please enter Game ID & Server ID";
        username.style.color = "#ff4444";
        return;
    }

    username.innerHTML = "✅ Username : Demo_Player";
    username.style.color = "#00ff88";
}

// Buy Buttons
document.querySelectorAll(".card button").forEach(btn => {
    btn.addEventListener("click", function () {

        let product =
            this.parentElement.querySelector("h3").innerText;

        alert("🛒 You selected : " + product);

    });
});

// Confirm Payment
const confirmBtn =
document.querySelector(".payment button");

confirmBtn.addEventListener("click", function(){

    let file =
document.querySelector(".payment input").files[0];

    if(!file){

        alert("📷 Please upload payment screenshot");

        return;

    }

    alert("✅ Payment submitted successfully!");

});

// Welcome Message
window.onload=function(){

console.log("Welcome to SinaTopup");

}

// Smooth Scroll
document.querySelectorAll("nav a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

let target=this.getAttribute("href");

if(target!="#"){

document.querySelector(target)
.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Animation
const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition="0.5s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*150);

});