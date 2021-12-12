// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
    document.innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">`
   
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   }else if (isNaN(testInput)) {
       return "Not a number";
   }else {
       return "Is a number";
   }
}

function formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass) {
    if ((pilotName.value === '')|| (copilotName.value === '')||(fuelLevel.value === '') || (cargoMass.value === '')) {
        alert("Please enter all information");
        event.preventDefault();
     } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
        alert("Please enter valid name for Pilot Name or Co-pilot Name (or both)");
        preventDefault();
     } else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
        alert("Please enter valid number for Fuel Level or Cargo Mass (or both)");
        event.preventDefault();
     } else {
        document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotName.value + " Ready";
        document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilotName.value + " Ready";
        if (fuelLevel.value <= 10000) {
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
           document.getElementById("launchStatus").style.color = "red";
           document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        } else {
           document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        }
        if (cargoMass.value >= 10000) {
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
           document.getElementById("launchStatus").style.color = "red";
           document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
        } else {
           document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }
        if (cargoMass.value <= 10000 && fuelLevel.value >= 10000) {
           document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
           document.getElementById("launchStatus").style.color = "green";
           document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
           document.getElementById("faultyItems").style.visibility = "hidden";
        }
        event.preventDefault();
     }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    random = Math.round(Math.random()*5);
    return planets[random];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
