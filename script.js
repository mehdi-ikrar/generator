
class citations {
    constructor( auteur , titre, punchline, color){
        this.auteur = auteur;
        this.titre = titre;
        this.punchline = punchline;
        this.color = color;
    }
}

let fianso = new citations ("Sofian","XIII","Ton chef ces un abruti, il n'a rien compris ci ce n'es. qu'il se croient tous dans call of duty quand moi je kiff comme a disney","red");
let dosseh = new citations ("Dosseh", 'Ma keh a moi', "J'aurais voulue que ta plus belle tenue sois mes bras mon coeur s'en remettra pour l'instant suce moi sous les draps","purple" )
let booba = new citations ("Booba", "OKLM","Ta aimé sucer j'ai aimé césair","green")
let lefa = new citations ("Lefa","Paie","Je suis pas un ange, j'ai besoin de me venger, pour toi j'ai changer, j'ai perdue au change","yellow");
let kalash = new citations ("Kalash Criminel","Josky","Sa sert a rien de jouer les dee son pipé, sous coté comme scottie pippen","pink")
let boobaKyll = new citations ("Booba", "Kyll" , "Maman piétine moi, le paradis se trouve sous tes pieds","black")

console.log();

let eltCitation = "Citation: ";
let eltAuteur = "Auteur: ";
let eltTitre = "Titre: ";

let local = JSON.parse(localStorage.getItem("tableau"));

let auteurForm = document.getElementById('auteurForm')
let titreForm = document.getElementById('titreForm')
let punchlineForm = document.getElementById('punchlineForm')
let colorForm = document.getElementById('colorForm')

let affichageCitation = document.getElementById('citation')
let affichageAuteur = document.getElementById('auteur')


let affichageTitre = document.getElementById('titre')
let arrayCitation = [dosseh,fianso,booba,lefa,kalash,boobaKyll];

let btn = document.getElementById('btn')
btn.innerHTML= 'citation'



let submitButton = document.querySelector("#submitButton");
submitButton.innerHTML = 'Soumettre'

let validerButton = document.querySelector("#valider");


let blockQuote = document.createElement("h1");
document.getElementById ('citationBlock').appendChild(blockQuote);
blockQuote.innerHTML = ""

let form = document.getElementById('formulaire')
form.style.display = 'none'




let body = document.getElementById('body')

console.log();

    if (local!=null){
        arrayCitation.push(local)
    }

function generate(){
    console.log('clicked');
    var compte = arrayCitation[Math.floor(Math.random()*arrayCitation.length)];
    console.log(compte);

    affichageCitation.innerHTML = eltCitation + compte.punchline

    affichageAuteur.innerHTML = eltAuteur + compte.auteur

    affichageTitre.innerHTML = eltTitre + compte.titre

    btn.innerHTML= 'refresh'
    
    body.style.background = compte.color 

    blockQuote.innerHTML = ""
    form.style.display= "none"

    affichageCitation.style.display= "block"

    affichageAuteur.style.display= "block"

    affichageTitre.style.display= "block"
    document.getElementById("erreur").style.display = 'none';





}
function submite(){

    form.style.display= "block"
    body.style.background = 'red'

    blockQuote.innerHTML = ""
    affichageCitation.style.display= "none"

    affichageAuteur.style.display= "none"

    affichageTitre.style.display= "none"
    validerButton.addEventListener('click', valider);
    function valider(){

        let tableau = new citations (auteurForm.value,titreForm.value,punchlineForm.value,colorForm.value);
        localStorage.setItem("tableau", JSON.stringify(tableau));
        console.log(localStorage);
        
        /*
        localStorage.setItem("auteur",auteurForm.value);
        localStorage.setItem("titre",titreForm.value);
        localStorage.setItem("punchline",punchlineForm.value);
        localStorage.setItem("color",colorForm.value);
        */


    }
    

}

btn.addEventListener('click', generate);

submitButton.addEventListener('click', submite);


/*
submitButton.addEventListener("click", (h) => {
    console.log('clicked');
    
})
*/
    /*
    
    document.forms["formulaire"].addEventListener("submit", function(e){

        let erreur;
        let inputs = this;
        
        for (let i=0; i< inputs.length; i++){
            if (!inputs[i].value);
                erreur = 'veuillez renseigner tout les champs';
        }  

        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;   
            return false ;
        }else {
            alert('tu connais') 
        }
       


    })
       
   let myObj_serialized = JSON.stringify(boobaKyll)
   console.log(myObj_serialized);
    localStorage.setItem("boobaKyll", myObj_serialized);

    console.log(localStorage);
    */


