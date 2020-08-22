"use strict";

/**
 * @author Montalto Logan
 *
 * @date 09-July-2020
 */

var primaire = {
    P01: {Nom: 'Farnsworth', Prenom: 'Hubert', Niveau: "Primaire", Matieres: "Mathématiques", Prix: 7},
    P02: {Nom: 'Hoover', Prenom: 'Elizabeth', Niveau: "Primaire", Matieres: "Français", Prix: 8},
    };

var secondaire = {
    SE01: {Nom: 'Tournesol', Prenom: 'Tryphon', Niveau: "Secondaire", Matieres:"Sciences", Prix: 9},
};

var superieur = {
    SU01: {Nom: 'Dumbledore', Prenom: 'Albus', Niveau: "Supérieur", Matieres:"Psychologie", Prix: 14},
    SU02: {Nom: 'Jones', Prenom: 'Indiana', Niveau: "Supérieur", Matieres:"Géographie", Prix: 9},
    SU03: {Nom: 'Langdon', Prenom: 'Robert', Niveau: "Supérieur", Matieres:"Histoire", Prix: 7},
    SU04: {Nom: 'McGonagall', Prenom: 'Minerva', Niveau: "Supérieur", Matieres:"Droit", Prix: 11},
    SU05: {Nom: 'Suresh', Prenom: 'Mohinder', Niveau: "Supérieur", Matieres:"Chimie", Prix: 10},
    SU06: {Nom: 'Mosby', Prenom: 'Ted', Niveau: "Supérieur", Matieres:"Architecture", Prix: 13},
    SU07: {Nom: 'Xavier', Prenom: 'Charles', Niveau: "Supérieur", Matieres:"Biologie", Prix: 15},
};

var niveau = [primaire, secondaire, superieur];


// Liste déroulante dynamique

function Choix(form) {
    let n = form.Niveau.selectedIndex;
    form.Matieres.selectedIndex = 0;
    switch (n) {
        case 1 :
             document.formMatiere.Matieres.innerHTML = "<option>--- Choisissez une matière ---</option>";
            var f=document.formMatiere.Matieres;
            for (let i in primaire) {
                f.length++;
                f.options[f.length-1].text = primaire[i].Matieres;
            }
            break;
        case 2 :
            document.formMatiere.Matieres.innerHTML = "<option>--- Choisissez une matière ---</option>";
            var d=document.formMatiere.Matieres;
            for (let i in secondaire) {
                d.length++;
                d.options[d.length-1].text = secondaire[i].Matieres;
            }
            break;
        case 3 :
            document.formMatiere.Matieres.innerHTML = "<option>--- Choisissez une matière ---</option>";
            var c=document.formMatiere.Matieres;
            for (let i in superieur) {
                c.length++;
                c.options[c.length-1].text = superieur[i].Matieres;
            }
            break;
    }
}


function Prof(form){
    document.formMatiere.Profs.innerHTML = "<option>--- Choisissez un professeur ---</option>";
    let matieresShort = document.formMatiere.Matieres;
    let matieresSelect = matieresShort.options[matieresShort.selectedIndex].text;

    let niveauShort = document.formMatiere.Niveau;
    let niveauSelect = niveau[niveauShort.selectedIndex-1];
    console.log(niveau[niveauShort.selectedIndex-1]);
    let y = document.formMatiere.Profs;

    for (let a in niveauSelect) {
        if (niveauSelect[a].Matieres === matieresSelect) {
            y.length++;
            y.options[y.length-1].text = niveauSelect[a].Nom + " " + niveauSelect[a].Prenom;
        }
    }
}
