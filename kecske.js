// deklarálom a csónakot, és a partok <p> tag-jét
let balPart = document.getElementById("bal")
let balPartP = balPart.querySelector("p")
let jobbPart = document.getElementById("jobb")
let jobbPartP = jobbPart.querySelector("p")
let csonak = document.getElementById("csonak")

// a képeket elhelyezem a bal part p tagjében, és mindegyikhez hozzáadok egy "click" EventListener-t, ami a mozgat funkciót hívja meg
balPartP.innerHTML += `<img src="kepek/farkas.png" alt="">`+`<img src="kepek/kecske.png" alt="">`+`<img src="kepek/kaposzta.png" alt="">`
for (let index = 0; index < balPartP.querySelectorAll("img").length; index++) {
    balPartP.querySelectorAll("img")[index].addEventListener("click", mozgat)
}

function mozgat(event){
    console.log("asd");
    let img = event.target;
    // ha a kép a bal vagy jobb parton van
    if (img.parentElement === balPartP || img.parentElement === jobbPartP) {
        // ha a csónak üres
        if (csonak.children.length === 0) {
            // akkor átmozgatom a csonakba
            csonak.appendChild(img);
        }
    }
    // különben (vagyis ha a csónakban van), vissza mozgatom a megfelelő partra, a csónak megfelelő class-jától függően
    else {
        if(csonak.classList.contains("csonak-baloldalt")) {
            balPartP.appendChild(img);
        }
        if(csonak.classList.contains("csonak-jobboldalt")) {
            jobbPartP.appendChild(img);
        }
    }
    // ellenőrizzük, hogy teljesült-e a játék
    if (jobbPartP.querySelectorAll("img").length === 3) {
        alert("Sikeresen átvitted a Kecskét, a Káposztát és a Farkast!");
        location.reload();
    }
}

// a gombok a csónak-nak a class-jait állítják megfelelően, és meghívják a megEsz funkciót
document.getElementById("leftBtn").addEventListener("click", () => {
    document.getElementById("csonak").classList.remove("csonak-jobboldalt");
    document.getElementById("csonak").classList.add("csonak-baloldalt");
    megEsz();
});
document.getElementById("rightBtn").addEventListener("click", () => {
    document.getElementById("csonak").classList.remove("csonak-baloldalt");
    document.getElementById("csonak").classList.add("csonak-jobboldalt");
    megEsz();
});


function megEsz() {
    console.log(balPartP.querySelectorAll("img")[0].src);
    console.log(balPartP.querySelectorAll("img").src)
    // ha a bal parton hagyjuk őket, vagyis a bal parton potosan 2 img van, a csonak meg jobb oldalt van
    if(balPartP.querySelectorAll("img").length === 2 && csonak.classList.contains("csonak-jobboldalt")){
        if(balPartP.querySelectorAll("img")[0].src.includes("kepek/farkas.png") && balPartP.querySelectorAll("img")[1].src.includes("kepek/kecske.png")) {
            alert("A farkas megette a kecskét!");
            location.reload();
        }
        if(balPartP.querySelectorAll("img")[1].src.includes("kepek/farkas.png") && balPartP.querySelectorAll("img")[0].src.includes("kepek/kecske.png")) {
            alert("A farkas megette a kecskét!");
            location.reload();
        }
        if(balPartP.querySelectorAll("img")[0].src.includes("kepek/kaposzta.png") && balPartP.querySelectorAll("img")[1].src.includes("kepek/kecske.png")) {
            alert("A kecske megette a káposztát!");
            location.reload();
        }
        if(balPartP.querySelectorAll("img")[1].src.includes("kepek/kaposzta.png") && balPartP.querySelectorAll("img")[0].src.includes("kepek/kecske.png")) {
            alert("A kecske megette a káposztát!");
            location.reload();
        }
    }
    // ha a jobb parton hagyjuk őket, vagyis a jobb parton potosan 2 img van, a csonak meg bal oldalt van
    if(jobbPartP.querySelectorAll("img").length === 2 && csonak.classList.contains("csonak-baloldalt")){
        if(jobbPartP.querySelectorAll("img")[0].src.includes("kepek/farkas.png") && jobbPartP.querySelectorAll("img")[1].src.includes("kepek/kecske.png")) {
            alert("A farkas megette a kecskét!");
            location.reload();
        }
        if(jobbPartP.querySelectorAll("img")[1].src.includes("kepek/farkas.png") && jobbPartP.querySelectorAll("img")[0].src.includes("kepek/kecske.png")) {
            alert("A farkas megette a kecskét!");
            location.reload();
        }
        if(jobbPartP.querySelectorAll("img")[0].src.includes("kepek/kaposzta.png") && jobbPartP.querySelectorAll("img")[1].src.includes("kepek/kecske.png")) {
            alert("A kecske megette a káposztát!");
            location.reload();
        }
        if(jobbPartP.querySelectorAll("img")[1].src.includes("kepek/kaposzta.png") && jobbPartP.querySelectorAll("img")[0].src.includes("kepek/kecske.png")) {
            alert("A kecske megette a káposztát!");
            location.reload();
        }
    }
}


