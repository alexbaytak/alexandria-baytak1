//=====================================
//           ADMIN ACCOUNT
//=====================================
alert("admin.js works");

const ADMIN_EMAIL =

"anasazomy7766@gmail.com";


const ADMIN_PASSWORD =

"anas azomy1231";



//=====================================
//            LOGIN FORM
//=====================================


const loginForm =

document.getElementById(

"loginForm"

);


//=====================================
//              LOGIN
//=====================================


loginForm.addEventListener(

"submit",

(e)=>{


e.preventDefault();



const email =

document.getElementById(

"email"

).value;



const password =

document.getElementById(

"password"

).value;




if(

email===ADMIN_EMAIL &&

password===ADMIN_PASSWORD

){

    localStorage.setItem(

"token",

"admin"

);

alert(

"تم تسجيل الدخول بنجاح."

);


window.location.href=

"dashboard.html";


}


else{


alert(

"البريد الإلكترونى أو كلمة المرور غير صحيحة."

);


}



}


);