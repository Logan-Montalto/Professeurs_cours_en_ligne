"use strict";

/**
 * @author Montalto Logan
 *
 * @date 09-July-2020
 */

var professeurs = {
    P01: {Nom: 'Dumbledore', Prenom: 'Albus', Niveau: "Supérieur", Matieres:"Psychologie", Prix: 14},
    P02: {Nom: 'Farnsworth', Prenom: 'Hubert', Niveau: "Primaire", Matieres: "Mathématiques", Prix: 7},
    P03: {Nom: 'Hoover', Prenom: 'Elizabeth', Niveau: "Primaire", Matieres: "Français", Prix: 8},
    P04: {Nom: 'Jones', Prenom: 'Indiana', Niveau: "Supérieur", Matieres:"Géographie", Prix: 9},
    P05: {Nom: 'Langdon', Prenom: 'Robert', Niveau: "Supérieur", Matieres:"Histoire", Prix: 7},
    P06: {Nom: 'McGonagall', Prenom: 'Minerva', Niveau: "Supérieur", Matieres:"Droit", Prix: 11},
    P07: {Nom: 'Suresh', Prenom: 'Mohinder', Niveau: "Supérieur", Matieres:"Chimie", Prix: 10},
    P08: {Nom: 'Mosby', Prenom: 'Ted', Niveau: "Supérieur", Matieres:"Architecture", Prix: 13},
    P09: {Nom: 'Tournesol', Prenom: 'Tryphon', Niveau: "Secondaire", Matieres:"Sciences", Prix: 9},
    P10: {Nom: 'Xavier', Prenom: 'Charles', Niveau: "Supérieur", Matieres:"Biologie", Prix: 15},
    };

// Liste déroulante dynamique

function Choix(form) {
    let i = form.Niveau.selectedIndex;
    if (i === 0) {
        for (i=0;i<8;i++) {
            form.Matieres.options[i].text="";
        }
        return;
    }
    form.Matieres.selectedIndex = 0;
    switch (i) {
        case 1 :
            var txt = new Array ('Français','Mathématiques');
            form.Matieres.options[0].text="-- Choisissez une matière ---";
            var f=document.formMatiere.Matieres;
            for (i=0;i<txt.length;i++) {
                f.length++;
                f.options[f.length-1].text = txt[i];
                form.Matieres.options[i+1].text=txt[i];
            }
            break;
        case 2 :
            var txt = new Array ('Sciences');
            form.Matieres.options[0].text="-- Choisissez une matière ---";
            var d=document.formMatiere.Matieres;
            for (i=0;i<txt.length;i++) {
                d.length++;
                d.options[d.length-1].text = txt[i];
                form.Matieres.options[i+1].text=txt[i];
            }
            break;
        case 3 :
            var txt = new Array ('Architecture','Biologie','Chimie', 'Droit', 'Géographie', 'Histoire', 'Psychologie');
            form.Matieres.options[0].text="-- Choisissez une matière ---";
            var c=document.formMatiere.Matieres;
            for (i=0;i<txt.length;i++) {
                c.length++;
                c.options[c.length-1].text = txt[i];
                form.Matieres.options[i+1].text=txt[i];
            }
            break;
    }
}

var coursParticuliers = new Object();

function initialiserPage() {
    coursParticuliers = {};
    document.querySelectorAll("section")[1].innerHTML = "<table><thead><th>Nom de l'élève</th><th>Date du cours</th><th>Professeur</th><th>Nombre d'heures de cours</th><th>Prix Total</th></thead><tbody id='cours_particuliers'></tbody></table>";
}
