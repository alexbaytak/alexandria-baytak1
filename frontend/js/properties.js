//=====================================
//              API
//=====================================

let currentPage = 1;

const limit = 12;


//=====================================
//          GET PROPERTIES
//=====================================


async function loadProperties() {


    try {


        const response = await fetch(

            `${API_URL}/properties`

        );


        const properties =

        await response.json();


        displayProperties(

            properties

        );


    }


    catch (error) {


        console.log(error);


    }


}




//=====================================
//       DISPLAY PROPERTIES
//=====================================


function displayProperties(properties) {


    const container =

    document.getElementById(

        "propertiesContainer"

    );


    container.innerHTML = "";



    properties.forEach(


        (property) => {


            container.innerHTML += `


            <div class="property-card">


            <img

            src="${property.images?.[0] ||

            "/uploads/default.jpg"}"


            >



            <div class="property-content">


            <h3>

            ${property.title}

            </h3>



            <p>

            السعر :

            ${property.price}

            جنيه

            </p>



            <p>

            المدينة :

            ${property.city}

            </p>



            <p>

            المساحة :

            ${property.space}

            متر

            </p>



            <p>

            عدد الغرف :

            ${property.bedrooms}

            </p>




            </div>




            <div class="buttons">


            <button

            class="details-button"

            onclick=

            "goToProperty(

            '${property._id}'

            )"


            >

            عرض التفاصيل

            </button>




            <button

            class="whatsapp-button"

            onclick=

            "openWhatsapp()"


            >

            WhatsApp

            </button>




            <button

            class="call-button"

            onclick=

            "callNow()"

            >

            اتصل الآن

            </button>





            <button

            class="favorite-button"

            onclick=

            "addToFavorite(

            '${property._id}'

            )"

            >

            المفضلة

            </button>




            </div>


            </div>


            `;


        }


    );


}




//=====================================
//          DETAILS PAGE
//=====================================


function goToProperty(id) {


window.location.href =

`property.html?id=${id}`;


}




//=====================================
//            WHATSAPP
//=====================================


function openWhatsapp() {


window.open(

`https://wa.me/${WHATSAPP_NUMBER}`,

"_blank"

);


}




//=====================================
//             CALL NOW
//=====================================


function callNow() {


window.location.href =

`tel:${PHONE_NUMBER}`;


}




//=====================================
//            FAVORITES
//=====================================


function addToFavorite(id) {


let favorites =

JSON.parse(

localStorage.getItem(

"favorites"

)

) || [];


if(


!favorites.includes(id)


){


favorites.push(id);


localStorage.setItem(

"favorites",

JSON.stringify(

favorites

)

);


alert(

"تمت الإضافة إلى المفضلة."

);


}


else{


alert(

"العقار موجود بالفعل."

);


}


}




//=====================================
//              SEARCH
//=====================================


document.getElementById(

"searchButton"

).onclick = ()=>{


loadProperties();


};




//=====================================
//              START
//=====================================


loadProperties();