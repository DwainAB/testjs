let nbPerson = document.querySelector('.nbPerson')
let nbVehicule  = document.querySelector('.nbVehicule')
let nbPlanets = document.querySelector('.nbPlanets')

fetch("https://swapi.dev/api/people")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    nbPerson.innerHTML=data.count
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données : ", error);
  });

fetch("https://swapi.dev/api/vehicles")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    nbVehicule.innerHTML=data.count
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données : ", error);
  });

fetch("https://swapi.dev/api/planets")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    nbPlanets.innerHTML=data.count
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données : ", error);
  });
