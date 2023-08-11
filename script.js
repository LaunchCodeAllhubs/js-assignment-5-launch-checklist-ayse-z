// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let coPilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");    
        if (validateInput(pilotNameInput.value) === 'Empty'|| validateInput(coPilotNameInput.value) === 'Empty'|| 
        validateInput(fuelLevelInput.value) === 'Empty'||validateInput(cargoMassInput.value) === 'Empty') {
            alert('All fields are required');
        }else if (
            validateInput(fuelLevelInput.value) === 'Not a Number' || 
            validateInput(cargoMassInput.value) === 'Not a Number'||
            validateInput(pilotNameInput.value)==='Is a Number'||
            validateInput(coPilotNameInput.value)==='Is a Number') {
                alert(`Please enter text for names and numbers for fuel and cargo.`);
            }else{
                formSubmission(document,document.getElementById("faultyItems"),pilotNameInput.value,coPilotNameInput.value,fuelLevelInput.value,cargoMassInput.value);
                }
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
       let planetIndex = pickPlanet(listedPlanets);
       addDestinationInfo(document, planetIndex.name, planetIndex.diameter, planetIndex.star, planetIndex.distance, 
        planetIndex.moons, planetIndex.image);

    })
   
});