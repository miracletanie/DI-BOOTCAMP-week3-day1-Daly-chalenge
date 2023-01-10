//Create an array which value is the planets of the solar system.
const planets = ["Mercury", "venus", "Earth", "mars", "jupiter", "Sarturne", "uranus", "Neptune"]

for(let planete of planets){
    //For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
    let nDiv = document.createElement('div');
    nDiv.classList.add('planet')
	nDiv.classList.add(planete)

    for (let i =0;i< planets.moons;i++){
        nmoonDiv = document.createElement("div")
        moondiv.style.left = i *10 + "px"
        nDiv.appendChild(moondiv)
    }
    
const section = document.querySelector(".listPlanets")
section.appendChild(nDiv)
}




 





































