let listPlanet = document.querySelector('.list-planet')
let nbPlanet2 = document.querySelector('.nbPlanet2')

fetch("https://swapi.dev/api/planets")
  .then(response => response.json())
  .then(data => {

    nbPlanet2.innerHTML = data.count + " " + "resultat(s)"

  data.results.forEach(element => {
    let divPlanet = document.createElement('div')
    divPlanet.classList.add('planet')

    let namePlanet = document.createElement('p')
    namePlanet.innerHTML = element.name

    let locationPlanet = document.createElement('p')
    locationPlanet.innerHTML = element.terrain

    divPlanet.appendChild(namePlanet)
    divPlanet.appendChild(locationPlanet)
    listPlanet.appendChild(divPlanet)
  });

  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données : ", error);
  });