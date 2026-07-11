import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.login = function(){

let email = document.getElementById("user").value;
let password = document.getElementById("pass").value;

signInWithEmailAndPassword(auth, email, password)
.then((userCredential)=>{

document.getElementById("msg").innerHTML="✅ Login Success";

window.location.href="index.html";

})
.catch((error)=>{

document.getElementById("msg").innerHTML="❌ Email ឬ Password ខុស";

});

}
