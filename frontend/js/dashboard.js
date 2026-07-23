//=====================================
//          SECURITY CHECK
//=====================================


const token =

localStorage.getItem(

"token"

);


if(!token){

window.location.href =

"admin-login.html";

}



//=====================================
//          ADD PROPERTY
//=====================================


function goToAddProperty(){

window.location.href =

"request-property.html";

}



//=====================================
//          EDIT PROPERTY
//=====================================


function goToEditProperty(){


window.location.href =

"edit-property.html";


}







//=====================================
//          ALL PROPERTIES
//=====================================


function goToProperties(){


window.location.href =

"properties.html";


}



//=====================================
//              LOGOUT
//=====================================


function logout(){


localStorage.removeItem(

"token"

);


localStorage.removeItem(

"user"

);


alert(

"تم تسجيل الخروج بنجاح."

);


window.location.href =

"admin-login.html";


}