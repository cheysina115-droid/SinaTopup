function login(){

let u=document.getElementById("user").value;

let p=document.getElementById("pass").value;

if(u=="admin" && p=="123456"){

document.getElementById("msg").innerHTML="✅ Login Success";

window.location.href="index.html";

}else{

document.getElementById("msg").innerHTML="❌ Wrong Username or Password";

}

}