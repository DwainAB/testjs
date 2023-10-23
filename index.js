let btn = document.querySelector("button")
let img = document.querySelector("img")
let select = document.querySelector("select")
let containerListImg = document.querySelector('.container-list-img')
let response
let pictureDog
let imgSave = []

async function getDog() {

    if(select.value == "/"){
        response = await fetch("https://dog.ceo/api/breeds/image/random");
        pictureDog = await response.json();
        img.src = pictureDog.message
    }else{
        response = await fetch(`https://dog.ceo/api/breed/${select.value}/images/random`);
        pictureDog = await response.json();
        img.src = pictureDog.message
    }

}


btn.addEventListener("click", getDog)

img.addEventListener('click', () =>{
    imgSave.push(img.src)
    let createImg  = document.createElement('img')
    createImg.src = img.src
    containerListImg.appendChild(createImg)

})

