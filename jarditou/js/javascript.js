//1. partie Afficher le prénom.

function AfficherTexte() {
    var reponce1 = window.prompt("Entrez votre nom");
    var reponce2 = window.prompt("Entrez votre prénom");
    const myVar = "Bonjour,Monsieur ";
    const myVar1 = "Bonjour, Madame ";
    const myVar2 = ", Bienvenue sur notre site web!";

    if (window.confirm("Etes-vous un homme?") == true) {
        window.alert(myVar + reponce1 + reponce2 + myVar2)
    } else {
        window.alert(myVar1 + reponce1 + reponce2 + myVar2)
    }
}

//2.a. partie Opérateurs

/*let b = 100, c = 1.00, d = true;
const a = 100;
console.log("Ceci est une chaîne de caractères : "+a);
console.log(--b);
console.log(c=a);
console.log(!d)
//2.b.

var a = 100;
let b = 100, c = 1.00, d = true;
document.write("<h2>Ceci est une chaîne de caractères : </h2>"+a);
document.write(--b);
document.write(c=a);
document.write(!d);
*/

//3. Parité.

function Parité() {
    var a = window.prompt("Entrez un nombre ");
    var result = a % 2;

    if (result == 0) {
        window.alert("Ce nombre est pair.");
    } else {
        window.alert("Ce nombre est impair.");
    }
}

//4. Age.

function Age() {
    var reponce = window.prompt("Entrez votre année de naissance ");
    var anneeAct = 2020;
    var anneeVar = reponce;
    var age = anneeAct - anneeVar;

    if (age >= 18) {
        window.alert("Vous avez " + age + " ans." + " Vous etes majeur.");
    } else {
        window.alert("Vous avez " + age + " ans." + " Vous etes mineur.");
    }
}

//5.  Calculette.

function Calculette() {
    var r1 = window.prompt("Entrez un nombre entier.");
    var r2 = window.prompt("Entrez deuxieme nombre entier.");
    var r3 = window.prompt("Entrez un operateur + - / *");
    var reponse;

    switch (r3) {
        case ("+"):
            reponse = parseInt(r1) + parseInt(r2);
            if (isNaN(reponse)) {
                alert("Veuillez entrer des entiers.");
            } else alert(r1 + "+" + r2 + "=" + reponse);
            break;

        case ("-"):
            reponse = parseInt(r1) - parseInt(r2);
            if (isNaN(reponse)) {
                alert("Veuillez entrer des entiers.");
            } else alert(r1 + "-" + r2 + "=" + reponse);
            break;

        case ("*"):
            reponse = parseInt(r1) * parseInt(r2);
            if (isNaN(reponse)) {
                alert("Veuillez entrer des entiers.");
            } else alert(r1 + "x" + r2 + "=" + reponse);
            break;

        case ("/"):
            if (r2 == "0") {
                alert("La division par zéro est impossible");
            } else {
                reponse = parseInt(r1) / parseInt(r2);
                if (isNaN(reponse)) {
                    alert("Veuillez entrer des entiers.");
                } else alert(r1 + "/" + r2 + "=" + reponse);
            }
            break;
    }
}

//6. Saisie.
// a corriger, affiche notdefineded

function Saisie() {

    var text;
    var check = true;
    var result;
    var i = 1;

    while (check) {
        result = prompt("Saisissez le prénom №" + i + "\n ou Clic sur Annuler pour arreter le saisie.");
        i++;
        if (result) {
            text += result;
        } else {
            check = false
        }
    }
    var m = i - 2;
    alert("Vouz avez saisis " + m + " prénoms.\nLes prénoms sont " + text + ".");
}



//7. Entiers inférieurs à N.

function Entiers() {
    var N = parseInt(window.prompt("Entrez un nombre"));
    var rep = "";
    for (i = 0; i < N; i++) {
        rep = rep + i + ";";
    }
    document.getElementById("repEntiers").innerHTML = rep;
}


//8.Moyenne.
//a corriger, si on click annuler

function Moyenne() {
    var somme = 0;
    var rep = "";
    var nb = -1;
    var moyenne = 0;

    do {
        rep = window.prompt("Entrez une valeur.\nTapez 0 pour Annuler.");
        somme = somme + parseInt(rep);
        nb++;
    } while (rep != "0");

    if (somme > 0) {
        moyenne = somme / nb;
        alert("moyenne=" + moyenne.toFixed(2) + ". Et la somme=" + somme);
    } else {
        alert("aucune valeur n'a ete entree")
    }
}

// 9.Multiples.

function Multiples() {
    var N = prompt("Entrez un nombre entier.");
    var X = prompt("Entrez deuxieme nombre entier.");

    for (i = 1; i <= N; i++) {
        result = i * X;
        document.getElementById("multi").innerHTML = document.getElementById("multi").innerHTML + result + "<br/>";
    }
}

// 10.Nombre de voyelles.
// A corriger, trop long

function Voyelles() {
    var mot;
    mot = window.prompt("Je compte le nombre des voyelles. Entrez un mot.");
    let count = 0;

    var voyellesA = "a";
    var indexA = mot.indexOf(voyellesA);

    while (indexA != -1) {
        count++;
        indexA = mot.indexOf(voyellesA, indexA + 1);
    }

    var voyellesO = "o";
    var indexO = mot.indexOf(voyellesO);

    while (indexO != -1) {
        count++;
        indexO = mot.indexOf(voyellesO, indexO + 1);
    }

    var voyellesE = "e";
    var indexE = mot.indexOf(voyellesE);

    while (indexE != -1) {
        count++;
        indexE = mot.indexOf(voyellesE, indexE + 1);
    }

    var voyellesY = "y";
    var indexY = mot.indexOf(voyellesY);

    while (indexY != -1) {
        count++;
        indexY = mot.indexOf(voyellesY, indexY + 1);
    }

    var voyellesU = "u";
    var indexU = mot.indexOf(voyellesU);

    while (indexU != -1) {
        count++;
        indexU = mot.indexOf(voyellesU, indexU + 1);
    }

    var voyellesI = "i";
    var indexI = mot.indexOf(voyellesI);

    while (indexI != -1) {
        count++;
        indexI = mot.indexOf(voyellesI, indexI + 1);
    }
    document.getElementById("voy").innerHTML = count;

}


// 11.Image et Fonctions.

function Papillon() {
    var a = prompt("Entrez un nombre.");
    var b = prompt("Entrez un multiplicateur.");
    var papImage = document.getElementById("pap");

    rep1 = parseInt(a) * parseInt(a) * parseInt(a);
    rep2 = parseInt(a) * parseInt(b);
    papImage.src = "images/papillon.jpg";
    document.getElementById("legend").innerHTML = ("Le cube de " + a + " est égal à " + rep1 + "." + "<br/>" + "Le produit de " + a + " * " + b + " est égal à " + rep2);
}

// 12. Tableau.

function NTableau() {
    var table = [];
    var n;
    n = parseInt(prompt("Saisissez la taille d'un tableau"));
    var table = new Array(n);

    for (var i = 1; i <= n; i++) {
        table[i] = prompt("Rentrez la valeur de la case №" + i);
        document.getElementById("tbl").innerHTML = document.getElementById("tbl").innerHTML + table[i].toString() + "<br/>";
    }
}


// 13. 

function tableau() {
    var rep;
    var tab = [];
    //tab[0] = rep;



    for (var i = 0; i < n; i++) {
        rep = parseInt(prompt("Saisissez la valeur numérique.\nLa saisie s'arrête quand vous entrez 0"));
        var n = tab.length;

        if (rep == 0) {
            break;
        }

    }


}