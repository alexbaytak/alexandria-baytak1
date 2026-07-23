const ADMIN_EMAIL =
"anasazomy7766@gmail.com";

const ADMIN_PASSWORD = 
"anas azomy1231";

const form = document.getElementById("loginForm");


form.addEventListener(

"submit",

async(event)=>{

event.preventDefault();


const email = document
.getElementById("email").value;


const password = document
.getElementById("password").value;



if(

email===ADMIN_EMAIL &&

password===ADMIN_PASSWORD

){

window.location.href=

"/dashboard.html";

}


else{

document.getElementById(

"message"

).innerText=

"الإيميل أو كلمة المرور غير صحيحة.";

}


document.getElementById(

"message"

).innerText=

"حدث خطأ أثناء تسجيل الدخول.";


}


);