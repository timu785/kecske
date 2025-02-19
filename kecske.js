let balPart = document.getElementById("bal")
let balPartP = balPart.querySelector("p")
let jobbPart = document.getElementById("jobb")
let jobbPartP = jobbPart.querySelector("p")
let csonak = document.getElementById("csonak")

balPartP.innerHTML += `<img src="kepek/mc_goat.png" alt="">`+`<img src="kepek/mc_leaves.png" alt="">`+`<img src="kepek/mc_wolf.png" alt="">`

for (let index = 0; index < balPartP.querySelectorAll("img").length; index++) {
    balPartP.querySelectorAll("img")[index].addEventListener("click", csonakbaRak)
}

function csonakbaRak(event){
    csonak.appendChild(event.target)
}




