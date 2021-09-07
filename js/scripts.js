let boule = document.querySelector(".noir");
let texte = document.querySelector("h1")
let ombre = document.querySelector(".divombre")
let blancboule = document.querySelector(".blanc")
let body = document.querySelector("body")
let phrases = [
    "Tu veux un cable html ?",
    "Essaye encore",
    "Comment vas-tu",
    "C'est ton destin",
    "Je suis ton père",
    "Une chance sur deux",
    "Repose ta question",
    "Avec ou sans patate ?",
    "C'est certain",
    "Rose saumon",
    "Tu peux compter dessus",
    "Sans aucun doute",
    "Très probable",
    "Oui",
    "C'est bien parti",
    "C'est non",
    "Jaune poussin",
    "Vert pastèle",
    "N'y compte pas",
    "Impossible",
    "Rouge ou Bleu ?"
]
boule.addEventListener("click", function (event) {
    let touche;
    const listeTouches = "Space";
    if(event.type = "Keydown"){
        if(listeTouches.includes(event.key)){
            event.preventDefault();
        }
    }
    function getChrono() {

        let nombre = Math.floor(Math.random() * phrases.length);
        texte.textContent = phrases[nombre];
        texte.style.fontSize = "1.5rem"
        // texte.style.fontSize= Math.floor(Math.random() * 5) + "rem";
        texte.style.color= '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        boule.style.borderRadius= Math.floor(Math.random() * 50) + "%";
        // boule.style.width=Math.floor(Math.random() * 500) + "px";
        blancboule.style.borderRadius= Math.floor(Math.random() * 50) + "%";
        boule.style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        ombre.style.background= '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        blancboule.style.background= '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        color1 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        color2 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        color3 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        color4 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        color5 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        color6 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        boule.style.background= "radial-gradient(farthest-corner at top right," + color1 +"," + color2 + "," + color3 + "," + color4 +"," + color5 + "," + color6 + ")";
        let fontType = ["Arial", "Verdana", "Helvetica"];
        texte.style.fontFamily = Math.floor(Math.random(),fontType * 5);
        body.style.background = "radial-gradient(farthest-corner at top right," + color6 +"," + color5 + "," + color4 + "," + color3 +"," + color2 + "," + color1 + ")";
        body.style.backgroundRepeat = "no-repeat";
        body.style.height= "100vh";
    }
    let compteurdown = setInterval(() => {
        getChrono()
    }, 2000);
})