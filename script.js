// Write your JavaScript code here!



window.addEventListener("load", function() {
    
let form = document.querySelector("form");
let pilotName = document.querySelector("input[name=pilotName]");
let copilotName = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name=fuelLevel]");
let cargoMass = document.querySelector("input[name=cargoMass]");
form.addEventListener("submit", function(event) {
        formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);
    
});

    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanets = pickPlanet(listedPlanets);
       console.log(selectedPlanets.diameter);
       let div = document.getElementById("missionTarget");
       addDestinationInfo(div, selectedPlanets.name, selectedPlanets.diameter, selectedPlanets.star, selectedPlanets.distance, selectedPlanets.moons, selectedPlanets.image);

       
   })
   
   
});