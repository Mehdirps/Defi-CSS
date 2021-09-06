let boule = document.querySelector(".noir");
let texte = document.querySelector("h1")
let ombre = document.querySelector(".divombre")
let blancboule = document.querySelector(".blanc")
let phrases = [
    "Essaye plus tard",
    "Essaye encore",
    "Pas d'avis",
    "C'est ton destin",
    "Le sort en est jeté",
    "Une chance sur deux",
    "Repose ta question",
    "D'après moi ou",
    "C'est certain",
    "Oui absolument",
    "Tu peux compter dessus",
    "Sans aucun doute",
    "Très probable",
    "Oui",
    "C'est bien parti",
    "C'est non",
    "Peu probable",
    "Faut pas rêver",
    "N'y compte pas",
    "Impossible"
]
boule.addEventListener("click", function (event) {
    let touche;
    const listeTouches = "Space";
    if(event.type = "Keydown"){
        if(listeTouches.includes(event.key)){
            event.preventDefault();
        }
    }
    let nombre = Math.floor(Math.random() * phrases.length);
    texte.textContent = phrases[nombre];
    // texte.style.fontSize = "1.5rem"
    texte.style.fontSize= Math.floor(Math.random() * 5) + "rem";
    texte.style.color= '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    boule.style.borderRadius= Math.floor(Math.random() * 50) + "%";
    boule.style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    ombre.style.background= '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    blancboule.style.background= '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    color1 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    color2 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    color3 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    boule.style.background= "radial-gradient(farthest-corner at top right," + color1 +"," + color2 + "," + color3 + ")";
    texte.style.fontFamily = Math.floor(Math.random() + 5) + "";
})