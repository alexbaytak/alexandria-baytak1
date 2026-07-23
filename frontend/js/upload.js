//==================================
//          UPLOAD IMAGES
//==================================


async function uploadImages(){


const images =

document.getElementById(

"images"

).files;



if(images.length===0){


alert(

"قم باختيار صورة واحدة على الأقل."

);


return;


}



const formData =

new FormData();



for(let i=0;i<images.length;i++){


formData.append(

"images",

images[i]

);


}



try{


const response = await fetch(

`${API_URL}/upload/images`,

{

method:"POST",

body:formData

}

);



const data =

await response.json();



alert(

data.message ||

"تم رفع الصور بنجاح."

);


}


catch(error){


console.log(error);


alert(

"حدث خطأ أثناء رفع الصور."

);


}



}





//==================================
//          UPLOAD VIDEOS
//==================================



async function uploadVideos(){


const videos =

document.getElementById(

"videos"

).files;



if(videos.length===0){


alert(

"قم باختيار فيديو واحد على الأقل."

);


return;


}



const formData =

new FormData();



for(let i=0;i<videos.length;i++){


formData.append(

"videos",

videos[i]

);


}



try{


const response = await fetch(

`${API_URL}/upload/videos`,

{

method:"POST",

body:formData

}

);



const data =

await response.json();



alert(

data.message ||

"تم رفع الفيديوهات بنجاح."

);


}



catch(error){


console.log(error);


alert(

"حدث خطأ أثناء رفع الفيديوهات."

);


}


}