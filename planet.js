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
const selectElement = document.getElementById('list-planet-trie');
let allPlanets = [];
let filteredPlanets = [];

const fetchAllPlanets = async () => {
  let nextPage = "https://swapi.dev/api/planets/";

  while (nextPage) {
    const response = await fetch(nextPage);
    const data = await response.json();

    allPlanets = allPlanets.concat(data.results);

    nextPage = data.next;
  }
};


fetchAllPlanets()
  .then(() => {
    filterPlanets();
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données : ", error);
  });



function displayInfo(element) {
  if (allPlanets.length === 0) {
    infoShowPlanet.classList.replace('active', 'inactive');
    messageNonePlanet.classList.replace("inactive", "active");
    containerShowPlanet.style.height = "50px";
  } else {
    containerShowPlanet.style.height = "300px";
    messageNonePlanet.classList.replace("active", "inactive");
    infoShowPlanet.classList.replace('inactive', 'active');
    titleInfoShowPlanet.innerHTML = element.name;
    nbPopulationInfoPlanet.innerHTML = element.population;
    nbInfoPlanetDiametre.innerHTML = element.diameter;
    nbInfoPlanetClimat.innerHTML = element.climate;
    nbInfoPlanetGravite.innerHTML = element.gravity;
    nbInfoPlanetTerrain.innerHTML = element.terrain;
  }
}

function filterPlanets() {
  const selectedValue = selectElement.value;

  switch (selectedValue) {
    case "0 - 100 000":
      filteredPlanets = allPlanets.filter(element => {
        return element.population !== "unknown" && parseInt(element.population) <= 100000;
      });
      break;
    case "100 000 - 500 000":
      filteredPlanets = allPlanets.filter(element => {
        return element.population !== "unknown" && parseInt(element.population) > 100000 && parseInt(element.population) <= 500000;
      });
      break;
    case "+ 500 000":
      filteredPlanets = allPlanets.filter(element => {
        return element.population !== "unknown" && parseInt(element.population) > 500000;
      });
      break;
    default:
      filteredPlanets = allPlanets;
  }
  createElement();
}

function createElement() {
    listPlanet.innerHTML = ''
  
    nbPlanet2.innerHTML = filteredPlanets.length + " " + "résultat(s)"
  
    filteredPlanets.forEach(element => {

      let planet = document.createElement('div')
      planet.classList.add('planet')
      
      planet.innerHTML = `
          <p>${element.name}</p>
          <p>${element.terrain}</p>
      `
      
      listPlanet.appendChild(planet)
  
      planet.addEventListener('click', () => {
        displayInfo(element);
      })
    })
  }
  

selectElement.addEventListener('change', filterPlanets)
