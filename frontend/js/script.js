//=====================================
//            API URL
//=====================================

const API_URL = "http://localhost:3000";


//=====================================
//      LOAD LATEST PROPERTIES
//=====================================

async function loadLatestProperties() {

    try {

        const response = await fetch(

            img.src=`${API_URL}/uploads/images/${property.images[0]}`

        );

        const properties = await response.json();


        const container = document.getElementById(

            "latestProperties"

        );


        container.innerHTML = "";


        // عرض آخر 6 عقارات فقط

        properties
        .slice(0, 6)
        .forEach((property) => {


            const card = document.createElement(

                "div"

            );


            card.className =

            "property-card";


            card.innerHTML = `

            <img
            src="${property.images?.[0] || '/uploads/default.jpg'}"
            alt="${property.title}">


            <div class="property-content">


            <h3>
            ${property.title}
            </h3>


            <p>

            ${property.city}
            - ${property.area}

            </p>


            <p>

            ${property.space}
            متر مربع

            </p>


            <p>

            ${property.price}
            جنيه مصرى

            </p>


            <button
            class="property-button"

            onclick="goToProperty('${property._id}')">

            تفاصيل العقار

            </button>


            </div>

            `;


            container.appendChild(

                card

            );


        });


    }


    catch (error) {


        console.log(error);


    }

}



//=====================================
//      GO TO PROPERTY PAGE
//=====================================


function goToProperty(id) {


    window.location.href =

    `property.html?id=${id}`;


}



//=====================================
//       GO TO ALL PROPERTIES
//=====================================


const moreButton = document.querySelector(

    ".more-button"

);


if (moreButton) {


    moreButton.addEventListener(

        "click",

        () => {


            window.location.href =

            "properties.html";

            


        }

    );


}



//=====================================
//            SEARCH
//=====================================


const searchForm = document.getElementById(

    "searchForm"

);


if (searchForm) {


    searchForm.addEventListener(

        "submit",

        (event) => {


            event.preventDefault();

           
           window.location.href =

         `properties.html?
         city=${document.getElementById("city").value}
         &type=${document.getElementById("propertyType").value}
         &purpose=${document.getElementById("purpose").value}
         &minPrice=${document.getElementById("minPrice").value}
         &maxPrice=${document.getElementById("maxPrice").value}
         &minSpace=${document.getElementById("minSpace").value}
         &maxSpace=${document.getElementById("maxSpace").value}
         &bedrooms=${document.getElementById("bedrooms").value}`; 

        

         


        }

    );


}



//=====================================
//          WHATSAPP
//=====================================


const whatsappButton = document.getElementById(

    "homeWhatsapp"

);


if (whatsappButton) {


    whatsappButton.onclick = () => {


        window.open(

            "https://wa.me/01012436550",

            "_blank"

        );


    };


}



//=====================================
//          MESSENGER
//=====================================


const messengerButton = document.getElementById(

    "homeMessenger"

);


if (messengerButton) {


    messengerButton.onclick = () => {


        window.open(

            "https://www.facebook.com/profile.php?id=61591974535836",

            "_blank"

        );


    };


}



//=====================================
//            CALL NOW
//=====================================


const callButton = document.getElementById(

    "homeCall"

);


if (callButton) {


    callButton.onclick = () => {


        window.location.href =

        "tel:+201012436550";


    };


}





//=====================================
//          START APP
//=====================================


loadLatestProperties();


const images = [

"./assets/1.png",

"./assets/2.png",

"./assets/3.png",

"./assets/4.png"

];


let currentImage = 0;

const sliderImage =

document.getElementById(

"sliderImage"

);


setInterval(()=>{


sliderImage.style.opacity=0;


setTimeout(()=>{


currentImage++;

if(currentImage>=images.length){

currentImage=0;

}


sliderImage.src=

images[currentImage];


sliderImage.style.opacity=1;


},800);


},4000);