let listPlanet = document.querySelector('.list-planet');
let nbPlanet2 = document.querySelector('.nbPlanet2');
let titleInfoShowPlanet = document.querySelector('.title-info-show-planet');
let nbPopulationInfoPlanet = document.querySelector('.nbPopulationInfoPlanet');
let nbInfoPlanetDiametre = document.querySelector('.nbInfoPlanetDiametre');
let nbInfoPlanetClimat = document.querySelector('.nbInfoPlanetClimat');
let nbInfoPlanetGravite = document.querySelector('.nbInfoPlanetGravite');
let nbInfoPlanetTerrain = document.querySelector('.nbInfoPlanetTerrain');
let messageNonePlanet = document.querySelector('.messageNonePlanet');
let infoShowPlanet = document.querySelector('.infoShowPlanet');
let containerShowPlanet = document.querySelector('.container-show-planet');
let allPlanets = [];



const fetchAllPlanets = async () => {
  let nextPage = "https://swapi.dev/api/planets/";

  while (nextPage) {
    const response = await fetch(nextPage);
    const data = await response.json();

    allPlanets = allPlanets.concat(data.results);

    nextPage = data.next; 
  }
  console.log(allPlanets);


  return allPlanets;
};



fetchAllPlanets()
  .then(planets => {
    nbPlanet2.innerHTML = planets.length + " " + "résultat(s)";

    planets.forEach(element => {
      let divPlanet = document.createElement('div');
      divPlanet.classList.add('planet');

      let namePlanet = document.createElement('p');
      namePlanet.innerHTML = element.name;

      let locationPlanet = document.createElement('p');
      locationPlanet.innerHTML = element.terrain;

      divPlanet.appendChild(namePlanet);
      divPlanet.appendChild(locationPlanet);
      listPlanet.appendChild(divPlanet);

      divPlanet.addEventListener('click', () => {
        displayInfo(element);
      });
    });
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données : ", error);
  });




   function displayInfo(element) {
      if (allPlanets.length === 0) {
        infoShowPlanet.classList.replace('active', 'inactive')
        messageNonePlanet.classList.replace("inactive", "active");
        containerShowPlanet.style.height = "50px"

    } else {
        containerShowPlanet.style.height = "300px"
        messageNonePlanet.classList.replace("active", "inactive");
        infoShowPlanet.classList.replace('inactive', 'active')
        titleInfoShowPlanet.innerHTML = element.name
        nbPopulationInfoPlanet.innerHTML = element.population
        nbInfoPlanetDiametre.innerHTML = element.diameter
        nbInfoPlanetClimat.innerHTML = element.climate
        nbInfoPlanetGravite.innerHTML = element.gravity
        nbInfoPlanetTerrain.innerHTML = element.terrain
    }
 }
