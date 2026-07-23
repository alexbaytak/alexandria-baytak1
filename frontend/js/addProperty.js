//=====================================
//              API
//=====================================

const form = document.getElementById(
    "propertyForm"
);


//=====================================
//         GENERATE PROPERTY ID
//=====================================


function generatePropertyID(type){

    const randomNumber = Math.floor(

        1000 + Math.random()*9000

    );


    return `AB-${type}-${randomNumber}`;

}



//=====================================
//            ADD PROPERTY
//=====================================


form.addEventListener(

"submit",

async(e)=>{


e.preventDefault();



try{


const title =

document.getElementById(

"title"

).value;



const description =

document.getElementById(

"description"

).value;



const city =

document.getElementById(

"city"

).value;



const area =

document.getElementById(

"area"

).value;



const price =

document.getElementById(

"price"

).value;



const space =

document.getElementById(

"space"

).value;



const bedrooms =

document.getElementById(

"bedrooms"

).value;



const bathrooms =

document.getElementById(

"bathrooms"

).value;



const purpose =

document.getElementById(

"purpose"

).value;



const propertyType =

document.getElementById(

"propertyType"

).value;



const floor =

document.getElementById(

"floor"

).value;



const balconies =

document.getElementById(

"balconies"

).value;



//=====================================
//            FEATURES
//=====================================



const parking =

document.getElementById(

"parking"

).checked;



const elevator =

document.getElementById(

"elevator"

).checked;



const furnished =

document.getElementById(

"furnished"

).checked;



const airConditioning =

document.getElementById(

"airConditioning"

).checked;



const internet =

document.getElementById(

"internet"

).checked;



const gas =

document.getElementById(

"gas"

).checked;



const security =

document.getElementById(

"security"

).checked;



const kitchen =

document.getElementById(

"kitchen"

).checked;



const negotiable =

document.getElementById(

"negotiable"

).checked;



const installment =

document.getElementById(

"installment"

).checked;



//=====================================
//        PROPERTY ID
//=====================================


const propertyID =

generatePropertyID(

propertyType

);




//=====================================
//           FORM DATA
//=====================================



const formData = new FormData();



formData.append(

"title",

title

);



formData.append(

"description",

description

);



formData.append(

"city",

city

);



formData.append(

"area",

area

);



formData.append(

"price",

price

);



formData.append(

"space",

space

);



formData.append(

"bedrooms",

bedrooms

);



formData.append(

"bathrooms",

bathrooms

);



formData.append(

"purpose",

purpose

);



formData.append(

"propertyType",

propertyType

);



formData.append(

"propertyID",

propertyID

);



formData.append(

"floor",

floor

);



formData.append(

"balconies",

balconies

);



formData.append(

"parking",

parking

);



formData.append(

"elevator",

elevator

);



formData.append(

"furnished",

furnished

);



formData.append(

"airConditioning",

airConditioning

);



formData.append(

"internet",

internet

);



formData.append(

"gas",

gas

);



formData.append(

"security",

security

);



formData.append(

"kitchen",

kitchen

);



formData.append(

"negotiable",

negotiable

);



formData.append(

"installment",

installment

);



//=====================================
//              IMAGES
//=====================================



const images =

document.getElementById(

"images"

).files;



for(let i=0;i<images.length;i++){


formData.append(

"images",

images[i]

);


}




//=====================================
//              VIDEOS
//=====================================



const videos =

document.getElementById(

"videos"

).files;



for(let i=0;i<videos.length;i++){


formData.append(

"videos",

videos[i]

);


}




//=====================================
//              FETCH
//=====================================



const response = await fetch(

`${API_URL}/properties/add`,

{

method:"POST",

body:formData

}


);



const data =

await response.json();




if(response.ok){


alert(

`تم إضافة العقار بنجاح.

رقم العقار :

${propertyID}`

);


window.location.href =

"properties.html";


}



else{


alert(

data.message ||

"حدث خطأ."

);


}



}


catch(error){


console.log(error);


alert(

"حدث خطأ فى الخادم."

);


}


}


);