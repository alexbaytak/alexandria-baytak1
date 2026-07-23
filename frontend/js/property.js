//=====================================
//              API
//=====================================

const API_URL = "http://localhost:3000";


//=====================================
//         GET PROPERTY ID
//=====================================

const params = new URLSearchParams(

    window.location.search

);


const propertyID = params.get("id");



//=====================================
//        LOAD PROPERTY DETAILS
//=====================================


async function loadProperty() {

    try {


        const response = await fetch(

            `${API_URL}/properties/${propertyID}`

        );


        const property = await response.json();



        //==============================
        //            DETAILS
        //==============================


        document.getElementById(

            "title"

        ).textContent = property.title;



        document.getElementById(

            "price"

        ).textContent =

        `${property.price} جنيه مصرى`;



        document.getElementById(

            "city"

        ).textContent =

        `المدينة : ${property.city}`;



        document.getElementById(

            "area"

        ).textContent =

        `المنطقة : ${property.area}`;



        document.getElementById(

            "space"

        ).textContent =

        `المساحة : ${property.space} متر مربع`;



        document.getElementById(

            "bedrooms"

        ).textContent =

        `عدد الغرف : ${property.bedrooms}`;



        document.getElementById(

            "bathrooms"

        ).textContent =

        `عدد الحمامات : ${property.bathrooms}`;



        document.getElementById(

            "floor"

        ).textContent =

        `الدور : ${property.floor}`;



        document.getElementById(

            "propertyType"

        ).textContent =

        `نوع العقار : ${property.propertyType}`;



        document.getElementById(

            "purpose"

        ).textContent =

        `الغرض : ${property.purpose}`;



        document.getElementById(

            "description"

        ).textContent =

        property.description;




        //==============================
        //          MAIN IMAGE
        //==============================



        document.getElementById(

            "mainImage"

        ).src =

        property.images?.[0]

        ||

        "/uploads/default.jpg";




        //==============================
        //            FEATURES
        //==============================



        document.getElementById(

            "parking"

        ).textContent =

        property.parking ?

        "يوجد موقف سيارات"

        :

        "لا يوجد موقف سيارات";




        document.getElementById(

            "elevator"

        ).textContent =

        property.elevator ?

        "يوجد مصعد"

        :

        "لا يوجد مصعد";




        document.getElementById(

            "furnished"

        ).textContent =

        property.furnished ?

        "مفروش"

        :

        "غير مفروش";




        document.getElementById(

            "airConditioning"

        ).textContent =

        property.airConditioning ?

        "يوجد تكييف"

        :

        "لا يوجد تكييف";




        document.getElementById(

            "internet"

        ).textContent =

        property.internet ?

        "يوجد إنترنت"

        :

        "لا يوجد إنترنت";




        document.getElementById(

            "gas"

        ).textContent =

        property.gas ?

        "يوجد غاز"

        :

        "لا يوجد غاز";




        document.getElementById(

            "kitchen"

        ).textContent =

        property.kitchen ?

        "يوجد مطبخ"

        :

        "لا يوجد مطبخ";




        document.getElementById(

            "security"

        ).textContent =

        property.security ?

        "يوجد أمن"

        :

        "لا يوجد أمن";




        //==============================
        //            VIDEOS
        //==============================


        const videosContainer =

        document.getElementById(

            "videosContainer"

        );


        videosContainer.innerHTML = "";


        if(property.videos){


            property.videos.forEach(


                (video)=>{


                    videosContainer.innerHTML +=

                    `

                    <video controls>

                    <source
                    src="${video}">

                    </video>

                    `;


                }

            );


        }



    }


    catch(error){


        console.log(error);


    }


}




//=====================================
//           WHATSAPP
//=====================================


document.getElementById(

    "whatsappButton"

).onclick = ()=>{


window.open(

"https://wa.me/01012436550",

"_blank"

);


};




//=====================================
//           MESSENGER
//=====================================


document.getElementById(

    "messengerButton"

).onclick = ()=>{


window.open(

"https://www.facebook.com/profile.php?id=61591974535836",

"_blank"

);


};




//=====================================
//            CALL NOW
//=====================================


document.getElementById(

    "callButton"

).onclick = ()=>{


window.location.href =

"tel:+201012436550";


};




//=====================================
//             SHARE
//=====================================


document.getElementById(

    "shareButton"

).onclick = ()=>{


navigator.clipboard.writeText(

window.location.href

);


alert(

"تم نسخ رابط العقار."

);


};




//=====================================
//            FAVORITE
//=====================================


document.getElementById(

    "favoriteButton"

).onclick = ()=>{


alert(

"تمت إضافة العقار إلى المفضلة."

);


};




//=====================================
//            START
//=====================================


loadProperty();

