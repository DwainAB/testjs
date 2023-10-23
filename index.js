let btn = document.querySelector("button")
let img = document.querySelector("img")

async function getDog() {
    const reponse = await fetch("https://dog.ceo/api/breeds/image/random");
    const pictureDog = await reponse.json();
    img.src = pictureDog.message
}

btn.addEventListener("click", getDog)

