let btn = document.querySelector("button")
let img = document.querySelector("img")
let select = document.querySelector("select")
let response
let pictureDog

async function getDog() {

    if(select.value == "/"){
        response = await fetch("https://dog.ceo/api/breeds/image/random");
        pictureDog = await response.json();
        img.src = pictureDog.message
        console.log('ttt');
    }else{
        response = await fetch(`https://dog.ceo/api/breed/${select.value}/images/random`);
        pictureDog = await response.json();
        img.src = pictureDog.message
        console.log("test");
    }

}

btn.addEventListener("click", getDog)

